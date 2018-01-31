const DEFAULT_JIRA_COLUMNS = 'key,summary,created,priority,status';
const DEFAULT_JIRA_ISSUE_COUNT = 10;
const MAIN_JIRA_LABEL = "CI";
const TAGS_FIELD = "customfield_10032";
const WIKI_HOST = 'wiki.hybris.com';
const MAX_WIKI_PAGE_CREATION_RATE = 200; // (in millis) The wiki seems to have trouble handling too fast page creations, when there are more than 10 of them or so, so we are limiting the rate
//const WIKI_HOST = 'performancewiki2.hybris.com';

export {MAX_WIKI_PAGE_CREATION_RATE ,DEFAULT_JIRA_COLUMNS, DEFAULT_JIRA_ISSUE_COUNT, MAIN_JIRA_LABEL,TAGS_FIELD,WIKI_HOST};
