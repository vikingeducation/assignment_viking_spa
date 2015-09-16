var app = angular.module("app", ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise("/index");

  $stateProvider.state('main-page',{
    url: '/index',
    templateUrl: 'templates/products',
    controller: "MainCtrl"
  });
});
