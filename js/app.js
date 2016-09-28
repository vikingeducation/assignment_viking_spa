var app = angular.module('VikingStore', ['ui.router']);

app.factory('_', ['$window', function($window) {
  return $window._;
}]);

app.factory('faker', ['$window', function($window) {
  return $window.faker;
}]);

app.run(function($rootScope){
  $rootScope.$on("$stateChangeError", console.log.bind(console));
});

app.config(function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise("/products");

  $stateProvider
    .state('products', {
      url: '/products',
      abstract: true,
      template: '<div ui-view></div>'
    })
    .state('products.index', {
      url: '',
      templateUrl: 'js/templates/products/index.html',
      controller: 'ProductsCtrl',
      resolve: {
        categories: ['CategoriesService', function (CategoriesService) {
          return CategoriesService.seed().then(function(data) {
            return data;
          });
        }],
        products: ['ProductsService', function (ProductsService) {
          return ProductsService.seed().then(function(data){
            return data;
          });
        }]
      }
    })
    .state('products.show', {
      url: "/:id",
      templateUrl: 'js/templates/products/show.html',
      controller: 'ProductsShowCtrl',
      resolve: {
        categories: ['CategoriesService', function (CategoriesService) {
          return CategoriesService.seed().then(function(data) {
            return data;
          });
        }],
        product: ['ProductsService', '$stateParams', function (ProductsService, $stateParams) {
          return ProductsService
                      .findProduct($stateParams.id)
                      .then(function(data){
                        return data;
                      });
        }]
      }
    });
});
