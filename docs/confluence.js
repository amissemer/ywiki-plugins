var confluence = (function () {

  /**
   * Get a page by spaceKey and title from Confluence and returns a deferred for that page.
   * See jQuery.ajax().done()
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
    jQuery.ajax(
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
    defer.fail(ajaxFailureLogger);
    return defer;
  }
  /**
   * Copy the page "fromPageTitle" (without its descendants) under the page "toPageTitle",
   * and do a placeholder replacement in each page title using the titleReplacements.
   */
  var copySinglePage = function(fromSpaceKey, fromPageTitle, toSpaceKey, toPageTitle, titleReplacements) {
    return getContent(fromSpaceKey, fromPageTitle, 'space,body.storage')
    .pipe(function(pageToCopy) {
        console.log("Found page to Copy",pageToCopy);
        pageToCopy.title = replacePlaceholders(pageToCopy.title,titleReplacements);
        console.log("New Title for target page: "+pageToCopy.title);
        // Create the new page under toPageTitle
        return createPage(pageToCopy,toSpaceKey,toPageTitle);
      }
    );
  };
  var copyPageRecursive = function(fromSpaceKey, fromPageTitle, toSpaceKey, toPageTitle, titleReplacements) {
    return getContent(fromSpaceKey, fromPageTitle, 'space,body.storage,children')
    .pipe(function(pageToCopy) {
        console.log("Found page to Copy",pageToCopy);
        pageToCopy.title = replacePlaceholders(pageToCopy.title,titleReplacements);
        console.log("New Title for target page: "+pageToCopy.title);
        // Create the new page under toPageTitle
        return createPage(pageToCopy,toSpaceKey,toPageTitle);
      }
    );
  };
  var ajaxFailureLogger = function (status, error, jqr) {
      console.error("ajax request failed "+status, error, jqr);
  };
  var replacePlaceholders=function(template, replacements) {
    if (typeof replacements === undefined) return str;
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
    .pipe(function(newParentPage) {
      console.log("newParentPage: space=",newParentPage.space.key, "id=", newParentPage.id, "title=", newParentPage.title);
      return createPageUnderPageId(page, newParentPage.space.key, newParentPage.id);
    });
  }
  var createPageUnderPageId = function(page, targetSpaceKey, targetPageId) {
    page.ancestors=[ { id: targetPageId } ];
    console.log("New Page",page);
    page.space={ key: targetSpaceKey };
    return postPage(page);
  }
  var postPage = function(page) {
    return jQuery.ajax(
        {
          url: contextPath + '/rest/api/content',
          type: 'POST',
          contentType: 'application/json',
          data: JSON.stringify(page)
        }).fail( function(jqr, status, error) {
          ajaxFailureLogger(status,error,jqr);
        });
  };

  // exported functions
  return {
    getContent: getContent,
    copySinglePage: copySinglePage,
    copyPageRecursive: copyPageRecursive,
    createPage: createPage
  }

})();


// confluence.copySinglePage("ps", "Capabilities Workshop - [Customer] - [ProjectName] [Date]", "~adrien.missemer@hybris.com", "Tests",
//   {
//     "Customer": "Lids",
//     "ProjectName": "Release 2",
//     "Date": "Sept. 2017"
//   }
// ).done(function( val ) {console.log("Copy Successful",val)}).fail(function(err) {console.error("Copy failed",err)});
