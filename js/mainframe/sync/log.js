import {Output} from '../models/Output';
const output = Output.map({messages: []});
export default function log(msg) {
    if (!msg) msg='';
    output.append(msg);
    console.log(msg);
}
log.output = output;
