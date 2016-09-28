var app = angular.module('VikingStore', ['ui.router']);

app.factory('_', ['$window', function($window) {
  return $window._;
}]);

app.factory('faker', ['$window', function($window) {
  return $window.faker;
}]);

app.config(function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise("/");


});
