import $ from 'jquery';
import 'bootstrap-notify';
import log from './log';

$.notifyDefaults({
    // default settings
    type: 'danger',
    allow_dismiss: true,
    delay: -1,
    icon_type: 'class'
});

export default function notify(message) {
    log(`Notify: ${message}`);
    $.notify({
        icon: 'glyphicon glyphicon-warning-sign',
        message: message 
    });
}