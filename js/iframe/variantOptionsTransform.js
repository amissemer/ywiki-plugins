import wikiPageXslt from './wikiPageXslt';
var xsl = require('raw-loader!./xslt/strip-variant-options-blocks.xsl');

export default function variantOptionsTransform(text, options) {
    console.log('variantOptionsTransform', text, options);
    if (!options || options.length==0) return text;
    if (options.length>1) throw "Only one option is supported at this time";
    var option = options[0];
    return wikiPageXslt(text, xsl.format(option.name, option.value));
}

