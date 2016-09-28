var app = angular.module('store', ['ui.router']);

//lodash
app.factory('_', ['$window', function($window){
  return $window._;
}]);

//routes
app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/products');
  $stateProvider
    // .state('products', {
    //   url: '/',
    //   templateUrl: 'index.html',
    //   controller: 'StoreCtrl'
    // })
    .state('state1', {
      url: '/products',
      templateUrl: 'products.html',
      controller: 'StoreCtrl'

    });
}]);