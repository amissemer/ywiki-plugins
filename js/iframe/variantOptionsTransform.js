import {jsxml} from "../lib/jsxml";
import '../lib/polyfills';
var xsl = require('raw-loader!./strip-variant-options-blocks.xsl');

var atlassianNamespacePrefixes = ['atlassian-content','ac','ri','atlassian-template','at'];
var ns = [];
atlassianNamespacePrefixes.forEach(function(prefix) {
    ns.push('xmlns:'+prefix+'="confluence.'+prefix+'"');
});
function wrapStorageFormat(storageFormat) {
    return '<?xml version="1.0" encoding="UTF-8"?><xml '+ns.join(' ')+'>' + storageFormat + '</xml>';
}
var xmlPrologPattern = /^<xml[^>]*>/;
var closingXmlTagPattern = /<\/xml>$/;

function unwrapToStorageFormat(xml) {
    return xml.replace(xmlPrologPattern, '').replace(closingXmlTagPattern, '');
}

export default function variantOptionsTransform(text, options) {
    console.log('transform', text, options);
    if (!options || options.length==0) return text;
    if (options.length>1) throw "Only one option is supported at this time";
    var option = options[0];
    var xml = jsxml.fromString(wrapStorageFormat( text ) );
    var xslt = jsxml.fromString(xsl.format(option.name, option.value));
    return unwrapToStorageFormat ( jsxml.transReady(xml, xslt) );
}
