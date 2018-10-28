import $ from 'jquery';

const output = { messages: '' };

export default function log(msg) {
  if (!msg) msg = '';
  append(msg);
  console.log(msg);
}
log.output = output;

function append(message) {
  $.observable(output).setProperty('messages', `${output.messages + message}\n`);
}
