export function JiraError(message) {
  this.name = 'JiraError';
  this.message = message;
  this.stack = (new Error()).stack;
}
JiraError.prototype = Object.create(Error.prototype);
JiraError.prototype.constructor = JiraError;
