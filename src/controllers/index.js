import angular from 'angular';
//import EditableFieldComponentConfig from './editableField.component.js';
import MainController from './main.controller.js';
//import commonFooterModule from './footer/index';

// our common module
const ControllerModule = angular
  .module('app-controllers', [
//    commonNavModule,
//    commonFooterModule
  ])
   .controller('MainController', MainController)
  .name;

export default ControllerModule;
