const MAX_PARALLEL_READ = 4;
const MAX_PARALLEL_WRITE = 1;
export const throttleRead = require('throat')(MAX_PARALLEL_READ);
export const throttleWrite = require('throat')(MAX_PARALLEL_WRITE);
