// app.js
import angular from "angular";
import MainController from "./main.controller";
import CounterModule from "./counter/index.js";

// our root module
const AppModule = angular
  .module("parkApp", [CounterModule])
  .controller("MainController", MainController)
  .run(() =>
    // instance-injector
    console.log("Angular version " + angular.version.full)
  ).name;

export default AppModule;
