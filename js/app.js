var app = angular.module('store', ['ui.router']);

//lodash
app.factory('_', ['$window', function($window){
  return $window._;
}])