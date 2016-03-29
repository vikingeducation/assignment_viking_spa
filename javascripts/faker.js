angular.module('fakerModule', []).factory('faker', ['$window', function($window) {
  return $window.faker;
}]);
