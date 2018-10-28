import $ from 'jquery';
import { host } from './pluginCommon';

/** Loads an html fragment (under docs/fragments/), optionally injects it in the target jQuery selector */
export async function loadFragment(fragment, targetSelector) {
  const data = await $.get(`${host}/fragments/${fragment}`);
  if (targetSelector) {
    $(targetSelector).html(data);
  }
  return data;
}
export async function loadTemplate(template) {
  return $.templates(await $.get(`${host}/fragments/${template}`));
}
