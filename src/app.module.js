// app.js
import angular from 'angular';
import ComponentsModule from './components/index.js';
import ControllerModule from './controllers/index.js';
import DirectivesModule from './directives/index.js';

// our root module
const AppModule = angular
  .module('parkApp', [
    ComponentsModule,
    DirectivesModule,
    ControllerModule
  ])
  .run(function() { // instance-injector
    console.log('Angular version ' + angular.version.full);
  })
  .name;

export default AppModule;
