export const DEFAULT_JIRA_COLUMNS = 'key,summary,created,priority,status';
export const DEFAULT_JIRA_ISSUE_COUNT = 10;
export const MAIN_JIRA_LABEL = "CI";
export const TAGS_FIELD = "customfield_10032";
export const WIKI_HOST = 'wiki.hybris.com';
export const MAX_WIKI_PAGE_CREATION_RATE = 50; // (in millis) The wiki seems to have trouble handling too fast page creations, when there are more than 10 of them or so, so we are limiting the rate
export const SINGLE_WORKSPACE_PAGE_REDIRECT_DELAY = 500; // (in millis) for ESPLM-846
export const PREFIX = "ywiki-plugins.";
export const PREFERRED_REGION_KEY = "preferred.region";
export const DEFAULT_PROJECT_DOCUMENTATION_ROOT_PAGE = 'Project Documentation';
export const CISTATS_DATA_PAGE = 'Continuous Improvement - The Golden Button';
export const DEFAULT_CUSTOMER_PAGE_TEMPLATE = '.CI New Project Documentation Template';
export const XSLT_ENDPOINT_URL = 'https://bzycrip1eh.execute-api.eu-central-1.amazonaws.com/dev/page/transform';
// export const WIKI_HOST = 'performancewiki2.hybris.com';
export const PROP_KEY = 'ysync';
export const DEFAULT_RESTRICTION_GROUP = 'dl sap customer experience all employees (external)';
export const PORTFOLIO_GROUP = 'DL SAP CX Services Portfolio';

export const DEFAULT_FEEDBACK_TYPES = [
    {value: 'feedback_service_definition', name: 'Service Definition'},
    {value: 'feedback_alf', name: 'Methodology and Recommended Practices'},
    {value: 'feedback_product', name: 'Product Feedback'},
    {value: 'feedback_hcs', name: 'hCS Feedback'},
    {value: 'feedback_architecture', name: 'Architecture'},
    {value: 'feedback_other', name: 'Other'},
  ];