import "../css/mktplace-download-form.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.min.css';
import 'bootstrap-select/dist/css/bootstrap-select.min.css';
import 'bootstrap'
import $ from 'jquery';

import MktplaceController from '../controller/download-controller.js'

import {loadPluginStyleSheet} from '../../mainframe/stylesheetPlugin';
loadPluginStyleSheet('mktplace-download-form.css');

//Loads plugin
MktplaceController.loadDivContent();
