export function serial(tasks, fn) {
  return tasks.reduce((promise, task) => promise.then(previous => fn(task, previous)), Promise.resolve(null));
}

export function parallel(tasks, fn) {
  return Promise.all(tasks.map(task => fn(task)));
}

Array.prototype.forEachSerial = async function(fn) {
  return serial(this, fn);
};

Array.prototype.forEachParallel = async function(fn) {
  return parallel(this, fn);
};
