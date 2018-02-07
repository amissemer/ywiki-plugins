export function JiraError(message) {
  this.name = 'JiraError';
  this.message = message;
  this.stack = (new Error()).stack;
}
JiraError.prototype = Object.create(Error.prototype);
JiraError.prototype.constructor = JiraError;


export function JiraAuthError(authenticationUri) {
  this.name = 'JiraAuthError';
  this.message = 'Please authenticate with JIRA';
  this.authenticationUri = authenticationUri;
  this.stack = (new Error()).stack;
}
JiraAuthError.prototype = Object.create(Error.prototype);
JiraAuthError.prototype.constructor = JiraAuthError;
