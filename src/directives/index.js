import angular from "angular";
import counter from './counter.directive.js';

// our component module
const ComponentsModule = angular
  .module("app-directives", [])
  .directive("counter", counter).name;

export default ComponentsModule;
