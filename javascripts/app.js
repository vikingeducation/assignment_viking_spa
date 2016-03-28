var viking = angular.module('viking', ['ui.router']);

viking.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/index');

  $stateProvider

    .state('index', {
      url: '/index',
      views: {
        'products': {
          templateUrl: 'products.html',
          controller: 'ProductsCtrl'
        },

        'cart': {
          templateUrl: 'cart.html',
          controller: 'CartCtrl'
        },

        'show': {
          templateUrl: 'showproduct.html',
          controller: 'ShowCtrl'
        }
      }
    })
})