var goldenButton = (function() {

  var defaultProjectDocumentationRootPage='Project Documentation';
  var customerComboLimit=10;
  var defaultCustomerPageTemplate='.CI New Project Documentation Template';
  var template_pattern = /\[Customer\]|\[ProjectName\]/;

  function wireBanner(options) {
    var jEl = $(options.cssSelector);
    jEl.addClass("cibanner");
    if (!options.disablePullUp) {
      jEl.addClass("pullup");
    }
    options.buttonText = options.buttonText || "Start";
    options.bannerText = options.bannerText || $('#title-text').text();
    $(".wiki-content .innerCell").css("overflow-x", "visible");
    $(options.cssSelector).removeClass("rw_corners rw_page_left_section")
    .html('<div class="ciaction">\
                <img src="'+options.host+'/banner/clickme.png" />\
                <div id="theOneButton">'+options.buttonText+'</div>\
              </div>\
              <div class="cilogo">\
                <img src="'+options.host+'/banner/dashboard_figure.png" />\
              </div>\
              <div class="cicenter">\
                <h1>'+options.bannerText+'</h1>\
              </div>\
            ');
    options.cssSelector="#theOneButton";
    wireButton(options);
  }
/*  {
    cssSelector: '#theOneButton',
    targetSpace: 'ps',
    newInstanceDisplayName: 'Hybris Capabilities Workshop Engagement',
    addLabel: 'capabilities-workshop',
    logToPage: 'Capabilities Workshop - Log',
    openInNewTab: true
  }*/
  function wireButton(options) {
    if (!options || !options.cssSelector || !options.newInstanceDisplayName || !options.addLabel) {
      throw "wireButton({cssSelector:'',newInstanceDisplayName:'',addLabel='',logToPage:''})"
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
    options.customerPageTemplate = (options.customerPageTemplate? options.customerPageTemplate:defaultCustomerPageTemplate);
    console.log("projectDocumentationRootPage",options.projectDocumentationRootPage);
    options.openInNewTab=!!options.openInNewTab;
    options.targetSpace = options.targetSpace || currentSpaceKey;
    console.log("plugin options",options);
    function logCreation(logToPage, createdPage) {
      var version = $('.confluenceTh:contains("Current Version")').siblings('.confluenceTd').text();
      var versionMsg="";
      if (version) {
        versionMsg = " with baseline "+version;
      }
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
              var logLine = '<li><ac:link><ri:user ri:userkey="[userkey]" /></ac:link> created&nbsp;<ac:link><ri:page ri:content-title="[pagetitle]" /></ac:link> on&nbsp;<time datetime="[date]" />&nbsp;'+versionMsg+'</li>';
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

    function sendRegionsToIFrame() {
      getRegions(options.targetSpace , options.projectDocumentationRootPage)
      .pipe(function (regionResults) {
        return regionResults.results.map(function(regionPage) {return regionPage.title;});
      })
      .done(function(regionNames) {
        postMessage(
        {
            action: "regionNames",
            regionNames: regionNames
        });
      });
    }

    function close_iframe() {
      $('#iframecontainer iframe').unbind('load');
      $('iframe').fadeOut( function() {
        $('#iframecontainer iframe').attr('src', '');
        $('#block').fadeOut();
        $('#iframecontainer').fadeOut();
      });
    }

    function open_iframe() {
      $('#block').fadeIn();
      $('#iframecontainer').fadeIn();
      $('#iframecontainer iframe').bind('load', function() {
        console.log("iframe loaded");
        sendRegionsToIFrame();
        $('#loader').fadeOut(function() {
          $('iframe').fadeIn();
        });
      });
      $('#iframecontainer iframe').attr('src', options.host+'/form.html#newInstanceDisplayName='+encodeURIComponent(options.newInstanceDisplayName));

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
      if (data.region) {
        console.log("First creating Customer Page "+data.customer+" in region" + data.region);
        return createCustomerPage(data.region,data.customer).pipe( function() {
          return createWorkspace(data);
        } );
      } else {
        return createWorkspace(data);
      }
    }

    function createCustomerPage(region,customer) {
      // NO API to create from a template but the following could be used

      // https://wiki.hybris.com/pages/createpage-entervariables.action?templateId=136019971&spaceKey=~adrien.missemer%40hybris.com&title=fdsfds&newSpaceKey=~adrien.missemer%40hybris.com&fromPageId=327185731
      // JSON.stringify({
      //     "value": $("#wysiwygTextarea").val(),
      //     "representation": "editor"
      // });
      // POST https://wiki.hybris.com/rest/api/contentbody/convert/storage
      //{"value": wysiwyg,"representation":"editor"}
      //

      // For now we use a page instead of a pageTemplate. The page title used as a template is provided in options.customerPageTemplate
       return confluence.copyPage(options.targetSpace, options.customerPageTemplate, options.targetSpace, region, customer);
    }

    function createWorkspace(data) {
      var copiedPages=[];
      return confluence.getContentById(sourcePageId,'space')
      .pipe(function(sourcePage) {
        return confluence.copyPageRecursive(sourcePage.space.key, sourcePage.title, options.targetSpace, data.customer, onlyTemplates,
        {
          "Customer": data.customer,
          "ProjectName": data.projectName,
          "TargetEndDate": data.targetEndDate
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
      .fail(function() { console.error("Copy failed",arguments);postSubmitError("Copy failed, "+toError(arguments));   });
    }

    function findCustomerAction(data) {
      var term = data.customerPartial;
      getCustomersMatching(options.targetSpace , options.projectDocumentationRootPage, data.customerPartial, customerComboLimit)
      .done(function (customerNames) {
        sendCustomerNames(term, customerNames);
      });
    }

    function listenToMessageFromChildWindow() {
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
    }

    $( document ).ready( function () {
      $(options.cssSelector).after('<div id="block"></div><div id="iframecontainer"><div id="loader"></div><iframe></iframe></div>'
      +'<script src="'+options.host+'/confluence.js'+options.cacheBuster+'"></script>');
      $(options.cssSelector).click(open_iframe);
      listenToMessageFromChildWindow();
    });

    function sendCustomerNames(term, customerNames){
      postMessage(
      {
          action: "findCustomerResponse",
          term: term,
          result: customerNames
      });
    }
    function postMessage(message) {
      var iframeWin = $('#iframecontainer iframe')[0].contentWindow;
      iframeWin.postMessage(message,options.host);
    }
    function postSubmitError(error) {
      postMessage(
      {
          action: "submitError",
          error: error
      });
    }
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
  function extractPageIds(searchAPIResponse) {
    var pageIds=[];
    searchAPIResponse.results.forEach(function( page ) {
      pageIds.push(page.id);
    });
    return pageIds;
  }
  function parentQuery(pageIds) {
    var restriction = [];
    pageIds.forEach(function (pageId) {
      restriction.push("parent="+pageId);
    });
    return '('+restriction.join(' OR ')+')';
  }

  function getRegions(spaceKey, projectDocumentationRootPage) {
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
        return confluence.searchPagesWithCQL(spaceKey, "label!='project-documentation-pages' AND parent="+cachedProjectDocumentationRootPageResult.id, 50);
      })
      .pipe(function (regionResults) {
        cachedRegionResults = regionResults;
        return regionResults;
      });
  }
  /** Return 'limit' sub-sub pages of the spaceKey:projectDocumentationRootPage, whose title partially match partialTitle */
  function getCustomersMatching(spaceKey, projectDocumentationRootPage, partialTitle, limit) {
      return getRegions(spaceKey, projectDocumentationRootPage)
      .pipe(function (regionResults) {
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
  }

  function toError(args) {
    if (typeof args === "string") return args;
    if (args.length>0) {
      if (args[0].responseText) {
        return args[0].responseText;
      }
      return args[0];
    }
    return "";
  }
  // Filters pages that contain [placeholders]
  function onlyTemplates(page) {
    return template_pattern.test(page.title);
  }

  return {
    wireButton: wireButton,
    getCustomersMatching: getCustomersMatching,
    wireBanner: wireBanner
  }

})()
