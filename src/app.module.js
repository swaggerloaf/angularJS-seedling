// app.js
import angular from 'angular';

//import ComponentsModule from './components/index.js';
import CounterModule from './counter/index.js';


// our root module
const AppModule = angular
  .module('parkApp', [
    CounterModule
  ])
  .run( () =>  // instance-injector
    console.log('Angular version ' + angular.version.full)
  )
  .name;

export default AppModule;
