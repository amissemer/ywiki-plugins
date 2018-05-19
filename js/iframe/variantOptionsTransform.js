import {jsxml} from "../lib/jsxml";
import '../lib/polyfills';
var xsl = require('raw-loader!./strip-variant-options-blocks.xsl');

var atlassianNamespacePrefixes = ['atlassian-content','ac','ri','atlassian-template','at'];
var ns = [];
atlassianNamespacePrefixes.forEach(function(prefix) {
    ns.push('xmlns:'+prefix+'="confluence.'+prefix+'"');
});
function wrapStorageFormat(storageFormat) {
    return '<?xml version="1.0" encoding="UTF-8"?><xml '+ns.join(' ')+'>' 
    + escapeEntities(storageFormat)
    + '</xml>';
}
var xmlPrologPattern = /^<xml[^>]*>/;
var closingXmlTagPattern = /<\/xml>$/;

function unwrapToStorageFormat(xml) {
    return unescapeEntities( xml.replace(xmlPrologPattern, '').replace(closingXmlTagPattern, '') );
}
// IE doesn't handle well the declaration of all the needed HTML entities like &nbsp; inline in the XML
// so instead we just escape all & chars and unescape the returned documet before storing it back into Confluence
function escapeEntities(xmlAsText) {
    console.log("Before escape", xmlAsText);
    var ret = xmlAsText.replace(/&/g,'&amp;');
    console.log("After escape", ret);
    return ret;
}
function unescapeEntities(escapedText) {
    console.log("Before unescape", escapedText);
    var ret = escapedText.replace(/&amp;/g,'&');
    console.log("After unescape", ret);
    return ret;
}

export default function variantOptionsTransform(text, options) {
    console.log('transform', text, options);
    if (!options || options.length==0) return text;
    if (options.length>1) throw "Only one option is supported at this time";
    var option = options[0];
    var xml = jsxml.fromString(wrapStorageFormat( text ));
    var xslt = jsxml.fromString(xsl.format(option.name, option.value));
    return unwrapToStorageFormat ( jsxml.transReady(xml, xslt) );
}
