import $ from 'jquery';
import 'bootstrap-notify';
import log from './log';

const notify = {
    error: function(message) {
        log(`Notified error: ${message}`);
        return $.notify({
            icon: 'glyphicon glyphicon-warning-sign',
            message: message 
        },{
            // default settings
            type: 'danger',
            allow_dismiss: true,
            delay: -1,
            icon_type: 'class'
        });
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
