var store = angular.module("store", ['ui.router'] );

store.controller('productsCtrl', ['$scope', 'products', function($scope, products) {

  $scope.products = products.getProducts();


}])