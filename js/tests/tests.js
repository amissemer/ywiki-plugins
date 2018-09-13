import {loadStyleSheet,loadPluginStyleSheet} from '../mainframe/stylesheetPlugin';
import './tests.css';
import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
chai.use(chaiAsPromised);

loadStyleSheet(null, 'https://unpkg.com/mocha@5.2.0/mocha.css');
loadPluginStyleSheet('tests-bundle.css');

mocha.setup({ui:'bdd', timeout:10000, ignoreLeaks:true})

let context = require.context('..', true, /.+\.test\.js?$/);
context.keys().forEach(context);

mocha.run();