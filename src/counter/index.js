import angular from 'angular';

import counter from './counter.directive.js';

// our common module
const CounterModule = angular
  .module('app-controllers', [])
  .directive('counter', counter)
  .name;

export default CounterModule;
