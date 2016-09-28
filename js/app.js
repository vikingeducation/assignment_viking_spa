var app = angular.module('VikingStore', ['ui.router']);

app.factory('_', ['$window', function($window) {
  return $window._;
}]);

app.factory('faker', ['$window', function($window) {
  return $window.faker;
}]);

app.config(function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise("/products");
  
  $stateProvider
    .state('products', {
      url: '/products',
      abstract: true,
      template: '<div ui-view></div>',
    })
    .state('products.index', {
      url: '',
      templateUrl: 'js/templates/products/index.html',
      controller: 'ProductsCtrl'
    });
});
