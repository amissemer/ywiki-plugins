import variantOptionsTransform from './variantOptionsTransform';
import $ from 'jquery';
import wikiPageXslt from './wikiPageXslt';
var fixLocalLinksXsl = require('raw-loader!./xslt/fix-local-links.xsl');

var template_pattern = /\[Customer\]|\[ProjectName\]/;

export function TemplateProcessor(placeholderReplacements, variantOptions, forceTitle) {

  var placeholderReplacements = placeholderReplacements;
  var variantOptions = variantOptions; // [ { name : "hosting", value : "ccv2" | "other" } ]

  /** Filters only pages that contain [placeholders] */
  function isTemplatePage(page) {
    return template_pattern.test(page.title);
  }
  /* if no variantOptions are provided, all template pages are applicable
   * regardless of options, all template pages without labels for all of the option names as a prefix are applicable (e.g. no "hosting-*" label)
   * if variantOptions are provided and the page has labels with any option name as a prefix, then one of the label must match one of the option's "[name]-[value]" pattern, ie the page must have "hosting-ccv2" label in case the passed option is [ name : hosting, value : ccv2]
   */
  function isApplicableToVariantOptions(page) {
    if (!variantOptions) return true;
    var match = true;
    variantOptions.forEach(function(option) {
      var prefix = option.name+'-';
      var expectedLabel = prefix + option.value;
      var labels = getLabelsWithPrefix(page, prefix);
      if (labels && labels.length>0 && ! (labels.indexOf(expectedLabel)>=0) ) match = false;
    });
    return match;
  }
  function getLabelsWithPrefix(page, prefix) {
    var labels = [];
    if (page.metadata.labels && page.metadata.labels.results) {
      page.metadata.labels.results.forEach(function(labelObject) {
        if (labelObject.name.startsWith(prefix)) labels.push(labelObject.name);
      });
    }
    return labels;
  }
  /** 
   * if placeholderReplacements is null, returns the template.
   * if placeholderReplacements is a simple string, returns that string
   * if placeholderReplacements is a map, for each (key,value) pair in the map, replaces [key] placeholders with value. 
   **/
  function replacePlaceholders(template, escapeHtml) {
    if (typeof placeholderReplacements === undefined) return template;
    if (typeof placeholderReplacements === 'string') return placeholderReplacements;
    var result = template;
    for (var key in placeholderReplacements) {
      if (placeholderReplacements.hasOwnProperty(key)) {
        var varStr = '['+key+']';
        if (result.indexOf(varStr) == -1) {
          console.warn(varStr + " is not used in template",template);
        }
        var replacementValue = placeholderReplacements[key];
        if (typeof replacementValue !== 'string') {
          replacementValue = replacementValue.value;
        } else if (escapeHtml) {
          replacementValue = $("<div>").text(replacementValue).html();
        }
        var result = result.split(varStr).join(replacementValue);
      }
    }
    if (result.indexOf('[')!=-1) {
      console.warn("title still has uninterpolated variables",result);
    }
    return result;
  }

  function replacePlaceholderInPage(page) {
    console.log("Found page to Copy",page);
    if (forceTitle) {
      page.title = forceTitle;
    } else {
      page.title = replacePlaceholders(page.title);
    }
    console.log("New Title for target page: "+page.title);
    if (typeof placeholderReplacements!=='string') {
      page.body.storage.value = replacePlaceholders(page.body.storage.value, true);
    }
  }
  function fixLocalLinks(page) {
    page.body.storage.value = fixLocalLinksInternal(page.body.storage.value, page.space.key);
  }
  function fixLocalLinksInternal(content, spaceKey) {
    return wikiPageXslt(content, fixLocalLinksXsl.format(spaceKey));
  }
  function filterVariant(page) {
    page.body.storage.value = filterVariantInContent(page.body.storage.value);
  }
  /**
   * Processes the content by stripping divbox out when their class attribute value is not relevant to the selected variantOptions.
   * 
   * <ac:structured-macro ac:name="divbox"[^>]*><ac:parameter ac:name="class">${option.name}-${option.value}</ac:parameter>...</ac:structured-macro>
   */
  function filterVariantInContent(content) {
    return variantOptionsTransform(content, variantOptions);
  }

  return {
    /** 
     * Determines if a page is a template page and should be used to create the workspace, based on the variantOptions.
     * @param page a confluence page with its title and labels
     * @returns true|false
     **/
    isApplicableTemplatePage : function(page) {
      return isTemplatePage(page) && isApplicableToVariantOptions(page);
    },
    /**
     * Transforms a page a per placeholderReplacements and selected variantOptions
     * /!\ Working through side-effect, directly on the input page.
     */
    transformPage : function(page) {
      replacePlaceholderInPage(page);
      filterVariant(page);
      fixLocalLinks(page);
    }
  };

};
