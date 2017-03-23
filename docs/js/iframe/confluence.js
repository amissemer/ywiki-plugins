var confluence = (function (proxy) {

  var deletePage = function(spaceKey,pageTitle) {
    return getContent(spaceKey,pageTitle)
    .pipe( function (page) {
      return deletePageById(page.id);
    });
  };
  var deletePageRecursive = function(spaceKey,pageTitle) {
    return getContent(spaceKey,pageTitle)
    .pipe( function (page) {
      return deletePageRecursiveInternal( page.id );
    });
  };
  var deletePageById = function (pageId) {
    return proxy.ajax({
      url: contextPath + '/rest/api/content/'+encodeURIComponent(pageId),
      type: 'DELETE'
    }).fail(errorLogger( "DELETE page failed"));
  };
  var deletePageRecursiveInternal = function (pageId) {
    return getContentById(pageId, 'children.page')
    .pipe( function (page) {
      // first delete children
      var childrenPromises = [];
      console.log("In deletePageRecursiveInternal for ", page.title);
      if (page.children && page.children.page && page.children.page.results) {
        page.children.page.results.forEach( function (child) {
          childrenPromises.push(deletePageRecursiveInternal(child.id));
        });
      }
      // when all children are deleted
      return $.when.apply($,childrenPromises)
      // delete the current page
      .pipe( function() {
        return deletePageById(pageId);
      });
    });
  };
  /**
  * Get a page by spaceKey and title from Confluence and returns a deferred for that page.
  * See $.ajax().done()
  * Failures are logged and ignored.
  * The deferred is resolved with the first matching page is any, else it is rejected.
  */
  var getContent = function(spaceKey,pageTitle,expand) {
    var expandParam="";
    if (expand) {
      expandParam = '&expand='+encodeURIComponent(expand);
    }
    var defer = $.Deferred();
    var url = contextPath + '/rest/api/content?type=page&spaceKey='+encodeURIComponent(spaceKey)+'&limit=1&title=' + encodeURIComponent(pageTitle) + expandParam;
    console.log(url);
    proxy.ajax(
      {
        url: url,
        success: function (response) {
          console.log("Filtering AJAX response",response);
          if (response.results && response.results.length>0) {
            var page = response.results[0];
            console.log("Returning ",page);
            defer.resolve(page);
          } else {
            defer.reject("Page Not found: '"+spaceKey+":"+pageTitle+"'");
          }
        },
        error: function (jqr, status, error) {
          defer.reject(status, error, jqr);
        }
      });
      // add a default handler for failures, to make sure they are logged
      defer.fail(errorLogger( "AJAX get page by title failed"));
      return defer.promise();
    };

    var getContentById = function(pageId, expand) {
      var expandParam="";
      if (expand) {
        expandParam = '?expand='+encodeURIComponent(expand);
      }
      var url = contextPath + '/rest/api/content/'+encodeURIComponent(pageId) + expandParam;
      console.log(url);
      return proxy.ajax(url)
      .fail(errorLogger( "GET page by pageId failed"));
    };
    /** search for content with CQL
    for example https://wiki.hybris.com/rest/api/content/search?cql=label=customer%20and%20type=%22page%22%20and%20space=%22ps%22 */
    var searchPagesWithCQL = function(spaceKey, cqlQuery, limit, expand) {
      if (!limit || limit<0) {
        limit=15;
      }
      var expandParam=(expand?"&expand="+encodeURIComponent(expand):"");
      return proxy.ajax(contextPath + '/rest/api/content/search?limit='+encodeURIComponent(limit)+'&cql='+encodeURIComponent(cqlQuery+' and type=page and space=\''+spaceKey+'\'')+expandParam);
    };

    /**
    * Copy the page "fromPageTitle" (without its descendants) under the page "toPageTitle",
    * and do a placeholder replacement in each page title using the titleReplacements.
    */
    var copyPage = function(fromSpaceKey, fromPageTitle, toSpaceKey, toPageTitle, titleReplacements) {
      return getContent(fromSpaceKey, fromPageTitle, 'space,body.storage')
      .pipe(function(pageToCopy) {
        transformPage(pageToCopy, titleReplacements);
        // Create the new page under toPageTitle
        return createPage(pageToCopy,toSpaceKey,toPageTitle);
      }
    );
  };
  var transformPage = function(page, replacements) {
    console.log("Found page to Copy",page);
    page.title = replacePlaceholders(page.title,replacements);
    console.log("New Title for target page: "+page.title);
    if (typeof replacements!=='string') {
      page.body.storage.value = replacePlaceholders(page.body.storage.value,replacements);
    }
  };
  var copyPageRecursive = function(fromSpaceKey, fromPageTitle, toSpaceKey, toPageTitle, filter, titleReplacements, copiedPages) {
    var sourcePagePromise = getContent(fromSpaceKey, fromPageTitle);
    var targetPagePromise = getContent(toSpaceKey,toPageTitle, 'space');
    return $.when( sourcePagePromise, targetPagePromise )
    .pipe(function(sourcePage, targetPage) {
      return copyPageRecursiveInternal( sourcePage.id, targetPage.space.key, targetPage.id, filter, titleReplacements, copiedPages);
    });
  };
  var copyPageRecursiveInternal = function (sourcePageId, targetSpaceKey, targetPageId, filter, titleReplacements, copiedPages) {
    return getContentById(sourcePageId, 'space,body.storage,children.page')
    .pipe(function (pageToCopy) {
      if (filter(pageToCopy)) {
        transformPage(pageToCopy, titleReplacements);

        // Create the new page under targetSpaceKey:targetPageId
        return createPageUnderPageId(pageToCopy,targetSpaceKey,targetPageId)
          .pipe( function(copiedPage) {
            copiedPages.push(copiedPage);
            return copyAllChildren(pageToCopy, targetSpaceKey, copiedPage.id, filter, titleReplacements,copiedPages);
          });
      } else {
        console.log("Page is not a template, not copied, but children will be copied: ",pageToCopy.title);
        return copyAllChildren(pageToCopy, targetSpaceKey, targetPageId, filter, titleReplacements,copiedPages);
      }

    })
  };
  var copyAllChildren = function(pageToCopy, targetSpaceKey, targetPageId, filter, titleReplacements, copiedPages) {
    // recursively copy all children
    var childrenPromises = [];
    console.log("In copyAllChildren", pageToCopy,targetPageId);
    if (pageToCopy.children && pageToCopy.children.page && pageToCopy.children.page.results) {
      pageToCopy.children.page.results.forEach( function (child) {
        childrenPromises.push(copyPageRecursiveInternal(child.id, targetSpaceKey, targetPageId, filter, titleReplacements,copiedPages));
      });
    }
    // return the combination of all children copy promises
    return $.when.apply($,childrenPromises);
  }
  // returns a function that will log all the arguments on the console as an error, preprended with a message.
  var errorLogger = function (message) {
    return function() {
      console.error(message,arguments);
    }
  };
  /** if replacements is not provided, returns the template.
  if replacements is a simple string, returns that string
  if replacements is a map, for each (key,value) pair in the map, replaces [key] placeholders with value. */
  var replacePlaceholders=function(template, replacements) {
    if (typeof replacements === undefined) return template;
    if (typeof replacements === 'string') return replacements;
    var result = template;
    for (var key in replacements) {
      if (replacements.hasOwnProperty(key)) {
        var varStr = '['+key+']';
        if (result.indexOf(varStr) == -1) {
          console.warn(varStr + " is not used in template",template);
        }
        var result = result.split(varStr).join(replacements[key]);
      }
    }
    if (result.indexOf('[')!=-1) {
      console.warn("title still has uninterpolated variables",result);
    }
    return result;
  }
  var createPage = function(page, targetSpaceKey, targetParentTitle) {
    return getContent(targetSpaceKey,targetParentTitle,'space')
    .pipe(function(targetParentPage) {
      console.log("targetParentPage: space=",targetParentPage.space.key, "id=", targetParentPage.id, "title=", targetParentPage.title);
      return createPageUnderPageId(page, targetParentPage.space.key, targetParentPage.id);
    });
  }
  var createPageUnderPageId = function(page, targetSpaceKey, targetPageId) {
    page.ancestors=[ { id: targetPageId } ];
    console.log("New Page",page);
    page.space={ key: targetSpaceKey };
    return postPage(page);
  }
  var postPage = function(page) {
    return proxy.ajax(
      {
        url: contextPath + '/rest/api/content',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(page)
      }).fail( errorLogger( "POST new page failed" ));
    };
    var updateContent = function(page) {
      return proxy.ajax(
        {
          url: contextPath + '/rest/api/content/'+encodeURIComponent(page.id),
          type: 'PUT',
          contentType: 'application/json',
          data: JSON.stringify(page)
        }).fail( errorLogger( "PUT page failed "+page.title ));
    };
    var addLabel = function(pageId, label) {
      return proxy.ajax(
        {
          url: contextPath + '/rest/api/content/'+encodeURIComponent(pageId)+'/label',
          type: 'POST',
          contentType: 'application/json',
          data: JSON.stringify([{"prefix": "global","name": label}])
        }).fail( errorLogger( "ADD label to page "+pageId+" failed" ));
    };

    // exported functions
    return {
      getContent: getContent,
      copyPage: copyPage,
      copyPageRecursive: copyPageRecursive,
      createPage: createPage,
      deletePage: deletePage,
      deletePageRecursive: deletePageRecursive,
      addLabel: addLabel,
      getContentById: getContentById,
      updateContent: updateContent,
      searchPagesWithCQL: searchPagesWithCQL
    }

  })(proxy);
