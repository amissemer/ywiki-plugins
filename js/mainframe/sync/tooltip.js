import $ from 'jquery';

$(function () {
    $('body').tooltip({
        selector:'[data-toggle=tooltip]',
        delay: { "show": 200, "hide": 200 }
    });
});