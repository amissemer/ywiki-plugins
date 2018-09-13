import $ from 'jquery';
import 'bootstrap-notify';
import log from './log';

const errorOpts = {
    // default settings for error notify
    type: 'danger',
    allow_dismiss: true,
    delay: -1,
    icon_type: 'class'
};

const notify = {
    error: function(message, url) {
        log(`Notified error: ${message}`);
        let n = {
            icon: 'glyphicon glyphicon-warning-sign',
            message: message 
        };
        if (url) {
            n.url = url;
            n.target = '_blank';
        }
        return $.notify(n, errorOpts);
    },
    // progress is not usable for now due to an amination glitch, possibly caused by duplicate jQuery versions on page
    progress: function(message) {
        log(`Notified progress: ${message}`);
        let notif = $.notify({
            message: message
        },{
            type: 'info',
            showProgressbar: true,
            allow_dismiss: false,
            delay: -1
        });
    }
};

export default notify;
