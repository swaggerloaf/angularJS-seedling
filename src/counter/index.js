import angular from 'angular';
import MainController from './main.controller.js';
import counter from './counter.directive.js';

// our common module
const CounterModule = angular
  .module('app-controllers', [])
  .controller('MainController', MainController)
  .directive('counter', counter)
  .name;

export default CounterModule;
