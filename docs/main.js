yWikiPlugins.main = (function() {

  var defaultProjectDocumentationRootPage='Project Documentation';
  var customerComboLimit=10;
/*  {
    cssSelector: '#theOneButton',
    targetSpace: 'ps',
    newInstanceDisplayName: 'Hybris Capabilities Workshop Engagement',
    addLabel: 'capabilities-workshop',
    logToPage: 'Capabilities Workshop - Log',
    openInNewTab: true
  }*/
  var wireButton = function(options) {
    if (!options || !options.cssSelector || !options.targetSpace || !options.newInstanceDisplayName || !options.addLabel) {
      throw "wireButton({cssSelector:'',targetSpace:'',newInstanceDisplayName:'',addLabel='',logToPage:''})"
    }
    var sourcePageId = $('meta[name=ajs-page-id]').attr("content");
    if (!sourcePageId) {
      throw "Could not read current pageId";
    }
    var currentUserKey = $('meta[name=ajs-remote-user-key]').attr("content");
    if (!currentUserKey) {
      throw new "Could not resolve current userkey";
    }
    var currentSpaceKey = $('meta[name=confluence-space-key]').attr("content");
    if (!currentSpaceKey) {
      throw new "Could not resolve current spaceKey";
    }

    // set defaults for missing options
    options.projectDocumentationRootPage = (options.projectDocumentationRootPage? options.projectDocumentationRootPage:defaultProjectDocumentationRootPage);
    console.log("projectDocumentationRootPage",options.projectDocumentationRootPage);
    options.openInNewTab=!!options.openInNewTab;
    options.targetSpace = (typeof options.targetSpace === undefined ? currentSpaceKey : options.targetSpace);

    var logCreation = function(logToPage, createdPage) {
      if (logToPage) {
          console.log("Logging creation of "+createdPage.title+" by "+currentUserKey+' in '+logToPage);
          return confluence.getContent(currentSpaceKey, logToPage, 'space,body.storage,version')
          .pipe( function(logPageJson) {
            console.log("logPageJson before edit: ",logPageJson);
            if (logPageJson.body.storage) {
              var bodyContent = logPageJson.body.storage.value;
              if (bodyContent.indexOf('<ul>')<0) {
                bodyContent='<ul></ul>';
              }
              var logLine = '<li><ac:link><ri:user ri:userkey="[userkey]" /></ac:link> created&nbsp;<ac:link><ri:page ri:content-title="[pagetitle]" /></ac:link> on&nbsp;<time datetime="[date]" />&nbsp;</li>';
              logLine=logLine.replace('[userkey]',currentUserKey).replace('[pagetitle]',createdPage.title).replace('[date]',formattedDate);
              logPageJson.body.storage.value=bodyContent.replace('</ul>',logLine+'</ul>');
              logPageJson.version.minorEdit=false;
              logPageJson.version.number+=1;
              return confluence.updateContent(logPageJson);
            }
          });
      } else {
        console.log("Not logging because logToPage option is not set");
      }
    }

    // var sendAllCustomersToIframe = function() {
    //   getCustomersMatching(options.targetSpace , options.projectDocumentationRootPage, null, 1000)
    //   .done(function (customerNames) {
    //     sendCustomerNames(customerNames);
    //   });
    // }

    $( document ).ready( function () {
      $(options.cssSelector).after('<div id="block"></div><div id="iframecontainer"><div id="loader"></div><iframe></iframe></div>'
      +'<script src="'+yWikiPlugins.getHost()+'/confluence.js"></script>');
      $(options.cssSelector).click(function() {
        $('#block').fadeIn();
        $('#iframecontainer').fadeIn();
        $('#iframecontainer iframe').attr('src', yWikiPlugins.getHost()+'/form.html#newInstanceDisplayName='+encodeURIComponent(options.newInstanceDisplayName));
        $('#iframecontainer iframe').load(function() {
          //sendAllCustomersToIframe();
          $('#loader').fadeOut(function() {
            $('iframe').fadeIn();
          });
        });

        $(document).mouseup(function (e)
        {
          // Grab your div
          var foo = $('#block');
          if (foo.is(e.target) || foo.has(e.target).length > 0) {
            // If the target of the click is the surrounding block
            // Hide the iframe
            close_iframe();
          }
        });

      });

      function close_iframe() {
        $('iframe').fadeOut( function() {
          $('#iframecontainer iframe').attr('src', '');
          $('#block').fadeOut();
          $('#iframecontainer').fadeOut();
        });
      }

      var template_pattern = /\[Customer\]|\[ProjectName\]/;
      // Filters pages that contain [placeholders]
      var onlyTemplates = function (page) {

        return template_pattern.test(page.title);
      }

      function endCopyProcess(copiedPages) {
        var workspaceURL = '/pages/viewpage.action?pageId='+copiedPages[0].id;
        if (options.openInNewTab) {
          // option to open in new tab is set
          close_iframe();
          window.open(workspaceURL);
        } else {
          // simple redirect
          window.location.href = workspaceURL;
        }
      }

      function doCreate(data) {
        console.log("New Service Engagement...",data);
        //confluence.deletePageRecursive("~adrien.missemer@hybris.com","Hybris Capabilities Workshop Dashboard").
        //then( function() {
        var copiedPages=[];
        confluence.getContentById(sourcePageId,'space')
        .pipe(function(sourcePage) {
          return confluence.copyPageRecursive(sourcePage.space.key, sourcePage.title, options.targetSpace, data.customer, onlyTemplates,
          {
            "Customer": data.customer,
            "ProjectName": data.projectName
          }
          ,copiedPages
        )}).pipe( function() {
          if (copiedPages.length==0) {
            return $.Deferred().reject("No page was copied, check if one of the subpages of the service page definition has a title that matches the pattern "+template_pattern);
          }
          return confluence.addLabel(copiedPages[0].id, options.addLabel);
        })
        .pipe(function() {
          return logCreation(options.logToPage,copiedPages[0]);
        })
        .done(function() {
          console.log("Copy Successful, "+copiedPages.length+" page(s)",copiedPages);
          // Now open new tab or redirect to 'https://wiki.hybris.com/pages/viewpage.action?pageId='+copiedPages[0].id
          endCopyProcess(copiedPages);

        })
        .fail(function() { console.error("Copy failed",arguments);postSubmitError("Copy failed, "+arguments[0]);   });
        //} );

      }

      var findCustomerAction = function (data) {
        var term = data.customerPartial;
        getCustomersMatching(options.targetSpace , options.projectDocumentationRootPage, data.customerPartial, customerComboLimit)
        .done(function (customerNames) {
          sendCustomerNames(term, customerNames);
        });
      };

      // Listen to message from child window
      var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
      var eventer = window[eventMethod];
      var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";
      eventer(messageEvent,function(e) {
        if (e.data.action) {
          switch (e.data.action) {
            case "close": close_iframe(); break
            case "createWorkspace": doCreate(e.data); break
            case "findCustomer": findCustomerAction(e.data); break
            default: console.log('Unknown message :',e.data);
          }
        } else {
          console.log("Received non-action message",e.data);
        }
      },false);
    });
  };

  function formattedDate() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();
    if(dd<10) {
        dd='0'+dd
    }
    if(mm<10) {
        mm='0'+mm
    }
    return yyyy+'-'+mm+'-'+dd;
  }

  var cachedProjectDocumentationRootPageResult=null;
  var cachedRegionResults=null;
  var extractPageIds = function(searchAPIResponse) {
    var pageIds=[];
    searchAPIResponse.results.forEach(function( page ) {
      pageIds.push(page.id);
    });
    return pageIds;
  }
  var parentQuery=function(pageIds) {
    var restriction = [];
    pageIds.forEach(function (pageId) {
      restriction.push("parent="+pageId);
    });
    return '('+restriction.join(' OR ')+')';
  }
  /** Return 'limit' sub-sub pages of the spaceKey:projectDocumentationRootPage, whose title partially match partialTitle */
  var getCustomersMatching = function(spaceKey, projectDocumentationRootPage, partialTitle, limit) {
    var promise;
    if (cachedProjectDocumentationRootPageResult) {
      promise = $.Deferred().resolve(cachedProjectDocumentationRootPageResult).promise();
    } else {
      // get the id of the root Product Documentation page
      promise = confluence.getContent(spaceKey,projectDocumentationRootPage)
    }
    return promise
      .pipe(function(rootPage) {
        cachedProjectDocumentationRootPageResult = rootPage;
        if (cachedRegionResults) return cachedRegionResults;
        // get all the direct children of the root (the region pages) (there are around 10 of them but we use a limit of 50 to make sure we have them all)
        return confluence.searchPagesWithCQL(spaceKey, "parent="+cachedProjectDocumentationRootPageResult.id, 50);
      })
      .pipe(function (regionResults) {
        cachedRegionResults = regionResults;
        var titleRestriction = (partialTitle?' and (title~"'+encodeURIComponent(partialTitle)+'" OR title~"'+encodeURIComponent(partialTitle)+'*")':"");
        return confluence.searchPagesWithCQL(spaceKey, parentQuery(extractPageIds(cachedRegionResults))+titleRestriction, limit);
      })
      .pipe(function (searchResponse) {
        var customers=[];
         searchResponse.results.forEach(function(page) {
           customers.push(page.title);
         });
         return customers
      });
  };
  var sendCustomerNames = function(term, customerNames){
    postMessage(
    {
        action: "findCustomerResponse",
        term: term,
        result: customerNames
    });
  };
  var postMessage = function(message) {
    var iframeWin = $('#iframecontainer iframe')[0].contentWindow;
    iframeWin.postMessage(message,yWikiPlugins.getHost());
  }
  var postSubmitError = function(error) {
    postMessage(
    {
        action: "submitError",
        error: error
    });
  }

  return {
    wireButton:wireButton,
    getCustomersMatching:getCustomersMatching
  }

})()
