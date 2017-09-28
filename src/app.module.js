// app.js
import angular from 'angular';
import ComponentsModule from './components/index.js';
import ControllerModule from './controllers/index.js';

// our root module
const AppModule = angular
  .module('parkApp', [
    ComponentsModule,
    ControllerModule
  ])
  .run(function() { // instance-injector
    console.log('Angular baby ' + angular.version.full);
  });

export default AppModule;
