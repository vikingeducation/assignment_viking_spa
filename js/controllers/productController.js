VikingStore.controller("ProductCtrl", ["$scope", "$stateParams","ProductsService", function($scope, $stateParams, ProductsService){
  $scope.products = ProductsService.products();
  $scope.cartProducts = [];

  $scope.addToCart = function (product) {
    console.log($scope.cartProducts);
    $scope.cartProducts.push(product);
    console.log($scope.cartProducts);
  }

}]);
