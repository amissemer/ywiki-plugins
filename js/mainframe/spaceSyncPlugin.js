// Entry point of the sync tool
// Load main dependencies and css
import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.min';
import 'bootstrap/dist/css/bootstrap.css';
// resets some default
import './spaceSyncPlugin.css';
import {loadPluginStyleSheet} from './stylesheetPlugin';
import {loadTemplate} from './fragmentLoader';
import jsviews from 'jsviews';
import log from './sync/log';
import './sync/contextMenu';
import pageSyncAnalyzer from './sync/pageSyncAnalyzer';
import pageSyncPerformer from './sync/pageSyncPerformer';
import syncModel from './sync/model';
import spaceScanner from './sync/spaceScanner';
import './sync/tooltip';

loadPluginStyleSheet('space-sync-bundle.css');
// load jsviews and binds it to jQuery
jsviews($);

// read the <ci-sync-app> macro setting from the wiki page
let appElt = $('ci-sync-app').first();
let sourceSpace = appElt.data('source-space');
let targetSpace = appElt.data('target-space');
let sourceRootPage = appElt.data('source-root-page');
let targetParentPage = appElt.data('target-parent-page');
log(`sourceSpace="${sourceSpace}"`);
log(`targetSpace="${targetSpace}"`);
log(`sourceRootPage="${sourceRootPage}"`);
log(`targetParentPage="${targetParentPage}"`);
// store the targetSpace in the model for future reference
syncModel.targetSpace = targetSpace;

// load the jsview template and link it to the model and helper functions
loadTemplate('sync-plugin/page-groups-table.html').then( function(tmpl) {
    tmpl.link(appElt, syncModel, {
        analyze : pageSyncAnalyzer,
        perform: pageSyncPerformer
    });
});

// trigger the scan of the space for pages to sync
spaceScanner(sourceSpace, sourceRootPage);
