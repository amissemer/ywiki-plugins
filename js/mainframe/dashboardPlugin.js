import * as plugin from './plugin';
import {encodeOptions} from '../common/optionsParser'
import '../../css/dashboard-page.css';
import iframeWrapper from '../common/iframeWrapper';

function attachHandlersToIFrameWindow(host, myIFrame) {
  iframeWrapper(myIFrame[0].contentWindow, host)
    .attachActionHandler("ajax", function (param) {
      return jQuery.ajax(param);
    })
    .attachActionHandler("$text", function (e) {
      return jQuery(e).text();
    })
    .attachActionHandler("$tableCellsGetHtml", function (e) {
      return jQuery(e).get().map(function(row) {
        return $(row).find('td').get().map(function(cell) {
          return $(cell).html().trim();
        });
      });
    })
    .attachActionHandler("$arrayGetText", function (e) {
      return jQuery(e).get().map(function(cell) {
        return $(cell).text();
      });
    });
}

var dataAttributes=[
  'service-types-dataheaders',
  'service-types-datasource',
  'service-engagements-dataheaders',
  'service-engagements-datasource',
  'improvement-ideas-dataheaders',
  'improvement-ideas-datasource'];

function bootstrap(host, cacheBuster) {
  $('[data-activate="dashboard"]').each( function() {
    var jEl=$(this);
    var options={
      host: host,
      cacheBuster: cacheBuster,
      title: $("#title-text").text(),
      element: this};
    dataAttributes.forEach( function(attr) {
      options[attr] = jEl.data(attr);
    });
    insertFrame(host,options);
  });
}

function insertFrame(host,options) {
  console.log("iframe being added");
  $(options.element).after('<iframe class="dashboard" src="'+options.host+'/'+'dashboard.html#'+encodeOptions(options)+'"></iframe>');
  var iframe = $("iframe.dashboard");
  iframe.bind('load', function() {
    $(this).fadeIn();
  });
  attachHandlersToIFrameWindow(host,iframe);
}

bootstrap(plugin.host,plugin.cacheBuster);
