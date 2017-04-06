import * as plugin from './plugin';
import {encodeOptions} from '../common/optionsParser'
import '../../css/dashboard-page.css';

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
    insertFrame(options);
  });
}

function insertFrame(options) {
  console.log("iframe being added");
  $(options.element).after('<iframe class="dashboard" src="'+options.host+'/'+'dashboard.html#'+encodeOptions(options)+'"></iframe>');
  $("iframe.dashboard").bind('load', function() {
    $(this).fadeIn();
  });
}

bootstrap(plugin.host,plugin.cacheBuster);
