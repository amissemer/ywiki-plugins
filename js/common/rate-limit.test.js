import { assert } from 'chai';
import $ from 'jquery-deferred';
import rateLimit from './rate-limit';

describe('rate-limit', () => {
  it('should not call the function in parallel', done => {
    const arr = [];
    for (let i = 0; i < 3; i++) {
      arr.push(rateLimited());
    }
    $.when(...arr).then((p1, p2, p3) => {
      assert.isTrue(p1);
      assert.isTrue(p2);
      assert.isTrue(p3);
      done();
    });
  });
});

let instance = 0;

function testFunction() {
  const ownInstance = ++instance;
  assert.exists($, '$ should exist');
  assert.exists($.Deferred, '$.Deferred should exist');
  // assert.equal(typeof $.Deferred,"fun");
  console.log(`Start ${ownInstance}...`);
  // console.log("jQuery",$);
  const defer = $.Deferred();
  setTimeout(() => {
    console.log(`<   End ${ownInstance}`);
    defer.resolve(ownInstance == instance);
  }, 100);
  return defer.promise();
}
var rateLimited = rateLimit(testFunction, 50);
