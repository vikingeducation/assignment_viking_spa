var store = angular.module("store", ['ui.router'] );

store.controller('productsCtrl', ['$scope', 'products', function($scope, products) {

  $scope.products = products.getProducts();


}])

store.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/products");

  $stateProvider.state("products", {
    url: '/products',
    templateUrl: 'templates/products.html',
    controller: 'productsCtrl'
  })

})