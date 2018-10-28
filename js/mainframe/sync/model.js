import log from './log';
import { host } from '../pluginCommon';

const model = {
  output: log.output,
  pages: [],
  host,
  progress: {},
};

/** Exports the singleton root jsview model */
export default model;
