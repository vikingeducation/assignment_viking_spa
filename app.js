var store = angular.module("store", ['ui.router'] );

store.controller('productsCtrl',
  ['$scope', 'products', 'categories', '$stateParams',
  function($scope, products, categories, $stateParams) {

  $scope.products = products.getProducts();

  $scope.categories = categories.getAll();

  $scope.product = $scope.products[$stateParams.id]


}])

store.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/products");

  $stateProvider

    .state("products", {
      url: '/products',
      templateUrl: 'templates/products/index.html',
      controller: 'productsCtrl'
    })

    .state("product", {
      url: '/product/:id',
      templateUrl: 'templates/products/show.html',
      controller: 'productsCtrl'
    })

})