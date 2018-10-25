// Entry point of the sync tool
// Load main dependencies and css
import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.min';
import 'bootstrap/dist/css/bootstrap.css';
// resets some default
import './spaceSyncPlugin.css';
import '../lib/Array.ext';
import {loadPluginStyleSheet} from './stylesheetPlugin';
import {loadTemplate} from './fragmentLoader';
import jsviews from 'jsviews';
import log from './sync/log';
import './sync/contextMenu';
import pageSyncAnalyzer from './sync/pageSyncAnalyzer';
import pageSyncPerformer from './sync/pageSyncPerformer';
import attachmentSyncPerformer from './sync/attachmentSyncPerformer';
import syncModel from './sync/model';
import spaceScanner from './sync/spaceScanner';
import './sync/tooltip';
import {DEFAULT_RESTRICTION_GROUP} from '../common/config';

loadPluginStyleSheet('space-sync-bundle.css');
// load jsviews and binds it to jQuery
jsviews($);

$(function() {
    // read the <ci-sync-app> macro setting from the wiki page
    let appElt = $('ci-sync-app').first();
    const globalOptions = {
        sourceSpace : appElt.data('source-space'),
        targetSpace : appElt.data('target-space'),
        sourceRootPage : appElt.data('source-root-page'),
        targetParentPage : appElt.data('target-parent-page'),
        editGroup : appElt.data('edit-group') || DEFAULT_RESTRICTION_GROUP,
        restrictAllPages : appElt.data('restrict-all-pages')
    };
    let conflictViewElt = $('ci-sync-conflicts').first();

    log(`sourceSpace="${globalOptions.sourceSpace}"`);
    log(`targetSpace="${globalOptions.targetSpace}"`);
    log(`sourceRootPage="${globalOptions.sourceRootPage}"`);
    log(`editGroup="${globalOptions.editGroup}"`);
    log(`restrictAllPages="${globalOptions.restrictAllPages}"`);
    // store the targetSpace in the model for future reference
    syncModel.globalOptions = globalOptions;

    // load the jsview template and link it to the model and helper functions
    loadTemplate('sync-plugin/page-groups-table.html').then( function(tmpl) {
        tmpl.link(appElt, syncModel, {
            analyze : pageSyncAnalyzer,
            perform: pageSyncPerformer,
            performAttachment: attachmentSyncPerformer
        });
    });
    if (conflictViewElt.length) {
        loadTemplate('sync-plugin/sync-conflicts-table.html').then( function(tmpl) {
            tmpl.link(conflictViewElt, syncModel);
        });
    }

    // trigger the scan of the space for pages to sync
    spaceScanner(globalOptions.sourceSpace, globalOptions.sourceRootPage);
});