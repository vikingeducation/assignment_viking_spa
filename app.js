var store = angular.module('Store', ['ui.router']);

store.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise("/index");
});
