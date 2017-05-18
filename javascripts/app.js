var app = angular.module('VikingApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

  // set a default state for all nonexistent routes
  // this is your "else" state
  $urlRouterProvider.otherwise("/route1");

  // set up some states on $stateProvider
  $stateProvider

    // name the state
    .state('state1', {

      // set the path to your state
      url: "/route1",

      // set the template for your state
      templateUrl: "javascripts/templates/route1.html",

      // name an existing controller for your route
      controller: "MainCtrl"
    })

    .state('state2', {
      url: "/route2",
      templateUrl: "javascripts/templates/route2.html",
      controller: "MainCtrl"
    })

});