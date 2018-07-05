import {jsxml} from "../lib/jsxml";
import '../lib/polyfills';

var ns = ['xmlns:ac="http://atlassian.com/content"',
    'xmlns:atlassian-content="http://atlassian.com/content"',
    'xmlns:ri="http://atlassian.com/resource/identifier"',
    'xmlns:at="http://atlassian.com/template"',
    'xmlns:atlassian-template="http://atlassian.com/template"'];

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

export default function transformWikiPage(textContent, xsl) {
    console.log('transformWikiPage', textContent, xsl);
    if (!textContent || !xsl) throw 'Both textContent and xsl are mandatory';
    return unwrapToStorageFormat(xslt(wrapStorageFormat(textContent), xsl));
}

function xslt(xmlTxt, xslTxt) {
    var xsltResult = jsxml.transReady(xmlTxt, xslTxt);
    console.log("Result of XSL-Transform", xsltResult);
    return xsltResult;
}