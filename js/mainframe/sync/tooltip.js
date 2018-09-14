import $ from 'jquery';

const ENABLE_TOOLTIPS = false;

$(function () {
    if (ENABLE_TOOLTIPS) {
        $('body').tooltip({
            selector:'[data-toggle=tooltip]',
            delay: { "show": 200, "hide": 200 }
        });
    }
});