// app.js
import angular from 'angular';
import MainController from './main.controller';
import TodoModule from './todo/index.js';
import DirectivesModule from './directives/index.js';
import ngRoute from 'angular-route';

// our root module
const AppModule = angular
  .module('app', [ngRoute, DirectivesModule, TodoModule])
  .controller('MainController', MainController)
  .run(() => console.log('Angular version ' + angular.version.full))
  .config([
    '$routeProvider',
    function config($routeProvider) {
      $routeProvider
        .when('/todos', {
          template: '<todo-list></todo-list>'
        })
        .when('/todos/:todoId', {
          template: '<todo-detail></todo-detail>'
        })
        .otherwise('/todos');
    }
  ])
  .filter('checkmark', function() {
    return function(input) {
      return input ? '\u2713' : '\u2718';
    };
  }).name;

export default AppModule;
