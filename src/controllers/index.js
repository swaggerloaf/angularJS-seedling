import angular from 'angular';
import MainController from './main.controller.js';

// our common module
const ControllerModule = angular
  .module('app-controllers', [])
  .controller('MainController', MainController)
  .name;

export default ControllerModule;
