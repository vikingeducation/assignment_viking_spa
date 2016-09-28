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
      controller: ''
    })
    .state('products.index', {
      url: '',
      templateUrl: 'js/templates/products/index.html',
      controller: 'ProductsCtrl',
      resolve: {
        categories: function (CategoriesService) {
          return CategoriesService.seed().then(function(data) {
            return data;
          });
        },
        products: function (ProductsService) {
          return ProductsService.seed().then(function(data){
            return data;
          });
        }
      }
    });
});
