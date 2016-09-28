var vikingStore = angular.module('vikingStore', []);

vikingStore.factory('_', ['$window', function($window) {
  return $window._;
}]);
