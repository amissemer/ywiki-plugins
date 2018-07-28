import $ from 'jquery';
import {XSLT_ENDPOINT_URL} from '../common/config';

export default async function xslTransformWikiPageContent(text, xslt) {
    try {
        return await $.post({
            url: XSLT_ENDPOINT_URL,
            data: JSON.stringify({
                source : text,
                xsl: xslt
            }),
            contentType: "application/json; charset=utf-8"
        });
    } catch (err) {
        console.error('Could not apply XSLT on page content',err,text);
        throw 'XSLT error';
    }
}