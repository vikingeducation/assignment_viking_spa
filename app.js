var spa = angular.module('spa', ['ui.router']);

spa.config(function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('index', {
      url: '/',
      templateUrl: '/templates/inventory.html',
      controller: 'StoreCtrl'
    });

});


spa.factory('_', ['$window', function($window) {
  return $window._; // assumes underscore has already been loaded on the page
}]);