// app.js
import angular from 'angular';
import  button from '../node_modules/angular-ui-bootstrap/src/buttons/index';

import CounterModule from './counter/index.js';

// our root module
const AppModule = angular
  .module('parkApp', [ button,
    CounterModule
  ])
  .run( () =>  // instance-injector
    console.log('Angular version ' + angular.version.full)
  )
  .name;

export default AppModule;
