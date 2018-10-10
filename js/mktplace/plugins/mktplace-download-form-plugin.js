import "../../../css/mktplace-download-form.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.min.css';
import 'bootstrap-select/dist/css/bootstrap-select.min.css';
import 'bootstrap'
import $ from 'jquery';

import MktplaceController from '../controller/download-controller.js'

//Loads required css files from the static pages
//TODO change hard link reference
const CSS_REFERENCE = "http://localhost/ywiki-plugins/dist/mktplace-download-form.css";

var link = document.createElement("link");
link.href = CSS_REFERENCE
link.type = "text/css";
link.rel = "stylesheet";
document.getElementsByTagName("head")[0].appendChild(link);

//Loads plugin
function loadPlugin() {
    MktplaceController.loadDivContent()
}


$(document).ready(loadPlugin())
