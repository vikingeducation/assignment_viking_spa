var VikingStore = angular.module('VikingStore', []);

VikingStore.factory('_', ['$window', function($window) {return $window._;}]);

VikingStore.factory('faker', ['$window', function($window) {return $window.faker;}]);