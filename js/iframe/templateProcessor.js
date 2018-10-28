import $ from 'jquery';
import variantOptionsTransform from './variantOptionsTransform';
import wikiPageXslt from './wikiPageXslt';

const fixLocalLinksXsl = require('raw-loader!./xslt/fix-local-links.xsl');

const template_pattern = /\[Customer\]|\[ProjectName\]/;

/**
 * Construct TemplateProcessor.
 *
 * @constructor
 * @this {TemplateProcessor}
 * @param {Object} options
 * @param {Object} options.placeholderReplacements
 * @param {Object} options.variantOptions
 * @param {boolean} options.forceTitle
 * @param {boolean} options.copyAttachments
 */
export function TemplateProcessor(options) {
  if (!(this instanceof TemplateProcessor)) return new TemplateProcessor(options);
  const placeholderReplacements = options.placeholderReplacements;
  const variantOptions = options.variantOptions; // [ { name : "hosting", value : "ccv2" | "other" } ]
  const forceTitle = options.forceTitle;
  this.copyAttachments = options.copyAttachments;

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
    let match = true;
    variantOptions.forEach(option => {
      const prefix = `${option.name}-`;
      const expectedLabel = prefix + option.value;
      const labels = getLabelsWithPrefix(page, prefix);
      if (labels && labels.length > 0 && !(labels.indexOf(expectedLabel) >= 0)) match = false;
    });
    return match;
  }
  function getLabelsWithPrefix(page, prefix) {
    const labels = [];
    if (page.metadata.labels && page.metadata.labels.results) {
      page.metadata.labels.results.forEach(labelObject => {
        if (labelObject.name.startsWith(prefix)) labels.push(labelObject.name);
      });
    }
    return labels;
  }
  /**
   * if placeholderReplacements is null, returns the template.
   * if placeholderReplacements is a simple string, returns that string
   * if placeholderReplacements is a map, for each (key,value) pair in the map, replaces [key] placeholders with value.
   * */
  function replacePlaceholders(template, escapeHtml) {
    if (typeof placeholderReplacements === undefined) return template;
    if (typeof placeholderReplacements === 'string') return placeholderReplacements;
    var result = template;
    for (const key in placeholderReplacements) {
      if (placeholderReplacements.hasOwnProperty(key)) {
        const varStr = `[${key}]`;
        if (result.indexOf(varStr) == -1) {
          console.warn(`${varStr} is not used in template`, template);
        }
        let replacementValue = placeholderReplacements[key];
        if (typeof replacementValue !== 'string') {
          replacementValue = replacementValue.value;
        } else if (escapeHtml) {
          replacementValue = $('<div>')
            .text(replacementValue)
            .html();
        }
        var result = result.split(varStr).join(replacementValue);
      }
    }
    if (result.indexOf('[') != -1) {
      console.warn('title still has uninterpolated variables', result);
    }
    return result;
  }

  function replacePlaceholderInPage(page) {
    console.log('Found page to Copy', page);
    if (forceTitle) {
      page.title = forceTitle;
    } else {
      page.title = replacePlaceholders(page.title);
    }
    console.log(`New Title for target page: ${page.title}`);
    if (typeof placeholderReplacements !== 'string') {
      page.body.storage.value = replacePlaceholders(page.body.storage.value, true);
    }
  }
  async function fixLocalLinks(page) {
    page.body.storage.value = await fixLocalLinksInternal(page.body.storage.value, page.space.key);
  }
  function fixLocalLinksInternal(content, spaceKey) {
    return wikiPageXslt(content, fixLocalLinksXsl.format(spaceKey));
  }
  async function filterVariant(page) {
    page.body.storage.value = await filterVariantInContent(page.body.storage.value);
  }
  /**
   * Processes the content by stripping divbox out when their class attribute value is not relevant to the selected variantOptions.
   *
   * <ac:structured-macro ac:name="divbox"[^>]*><ac:parameter ac:name="class">${option.name}-${option.value}</ac:parameter>...</ac:structured-macro>
   */
  function filterVariantInContent(content) {
    return variantOptionsTransform(content, variantOptions);
  }

  /**
   * Determines if a page is a template page and should be used to create the workspace, based on the variantOptions.
   * @param page a confluence page with its title and labels
   * @returns true|false
   * */
  this.isApplicableTemplatePage = function(page) {
    return isTemplatePage(page) && isApplicableToVariantOptions(page);
  };
  /**
   * Transforms a page a per placeholderReplacements and selected variantOptions
   * /!\ Working through side-effect, directly on the input page.
   */
  this.transformPage = async function(page) {
    replacePlaceholderInPage(page);
    await filterVariant(page);
    await fixLocalLinks(page);
  };
}
