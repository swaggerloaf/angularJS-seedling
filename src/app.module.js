// app.js
import angular from 'angular';
import MainController from './main.controller';
import TodoModule from './todo/index.js';

// our root module
const AppModule = angular
  .module('app', [TodoModule])
  .controller('MainController', MainController)
  .run(() => console.log('Angular version ' + angular.version.full)).name;

export default AppModule;
