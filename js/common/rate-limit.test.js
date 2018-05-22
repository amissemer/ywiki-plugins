import rateLimit from './rate-limit';
import { assert } from 'chai';
import $ from 'jquery-deferred';

describe('rate-limit', function() {
    it('should not call the function in parallel', function(done) {
        var arr = [];
        for (var i = 0; i<3;i++) {
            arr.push(rateLimited());
        }
        $.when.apply($, arr).then(function(p1, p2, p3) {
            assert.isTrue(p1);
            assert.isTrue(p2);
            assert.isTrue(p3);
            done();
        });
    });
});

var instance = 0;

function testFunction() {
    var ownInstance = ++instance;
    assert.exists($, '$ should exist');
    assert.exists($.Deferred, '$.Deferred should exist');
    //assert.equal(typeof $.Deferred,"fun");
    console.log("Start "+ownInstance+"...");
    //console.log("jQuery",$);
    var defer = $.Deferred();
    setTimeout(function() { console.log("<   End "+ownInstance); defer.resolve(ownInstance == instance); }, 100);
    return defer.promise();
}
var rateLimited = rateLimit(testFunction, 50);