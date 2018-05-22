import { delay, bind, defer, map  } from 'underscore';
import jQuery from 'jquery-deferred';

/* Extend the Underscore object with the following methods */

// Rate limit ensures a function is never called more than every [rate]ms
// Unlike underscore's _.throttle function, function calls are queued so that
//   requests are never lost and simply deferred until some other time
//
// Parameters
// * func - function to rate limit
// * rate - minimum time to wait between function calls
// Example
// function showStatus(i) {
//   console.log(i);
// }
// var showStatusRateLimited = _.rateLimit(showStatus, 200);
// for (var i = 0; i < 10; i++) {
//   showStatusRateLimited(i);
// }
//
// Dependencies
// * underscore.js
//
export default function rateLimit(func, rate) {
    var queue = [];
    var timeOutRef = false;
    var currentlyEmptyingQueue = false;
    
    var emptyQueue = function() {
        if (queue.length) {
            currentlyEmptyingQueue = true;
            delay(function() {
                defer(function() { 
                    var f = queue.shift(); 
                    if (f) {
                        jQuery.when(f.call()).then(emptyQueue); 
                    } else {
                        emptyQueue();
                    }
                });
            }, rate);
        } else {
            currentlyEmptyingQueue = false;
        }
    };
    
    return function() {
        var defer = jQuery.Deferred();
        var args = map(arguments, function(e) { return e; }); // get arguments into an array

        queue.push( function() {
            return jQuery.when(func.apply({}, args)).then( defer.resolve, defer.reject, defer.notify );
         } ); // call apply so that we can pass in arguments as parameters as opposed to an array
        if (!currentlyEmptyingQueue) { emptyQueue(); }
        return defer.promise();
    };
};

