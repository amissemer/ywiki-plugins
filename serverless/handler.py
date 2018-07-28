import json,traceback
import lxml.etree as ET
import re

def transform(event, context):
    statusCode = 200
    body = ""
    contentType = "text/html"
    try:
        inputData = json.loads(event["body"])
        body = transformWikiPage(inputData["source"], inputData["xsl"])
    except Exception as err:
        statusCode = 400
        body = json.dumps({"message":"Error", "error": traceback.format_exc(err)})
        contentType = "application/json"
    return {
            "statusCode": statusCode,
            "body": body,
            "headers" : {
                "Access-Control-Allow-Origin" : "*",
                "Content-Type" : contentType
            }
    }

def wrapStorageFormat(storageFormat):
    ns = ' '.join(['xmlns:ac="http://atlassian.com/content"',
        'xmlns:atlassian-content="http://atlassian.com/content"',
        'xmlns:ri="http://atlassian.com/resource/identifier"',
        'xmlns:at="http://atlassian.com/template"',
        'xmlns:atlassian-template="http://atlassian.com/template"'])
    return '<xml '+ns+'>' + escapeEntities(storageFormat) + '</xml>'


def unwrapToStorageFormat(xml):
    xmlPrologPattern = r'^<xml[^>]*>'
    closingXmlTagPattern = r'<\/xml>$'
    xml = re.sub(xmlPrologPattern,'',xml)
    xml = re.sub(closingXmlTagPattern, '', xml)
    return unescapeEntities( xml )

# Instead of declaring all the needed HTML entities like &nbsp; inline in the XML
# we just escape all & chars and unescape the returned document before storing it back into Confluence
def escapeEntities(xmlAsText):
    return re.sub(r'&',r'&amp;',xmlAsText)

def unescapeEntities(escapedText):
    return re.sub(r'&amp;', '&', escapedText)

def transformWikiPage(textContent, xsl):
    return unwrapToStorageFormat(xslt(wrapStorageFormat(textContent), xsl))

def xslt(txt,xsl):
    dom = ET.fromstring(txt)
    xslt = ET.fromstring(xsl)
    newdom = ET.XSLT(xslt)(dom)
    return ET.tostring(newdom)
