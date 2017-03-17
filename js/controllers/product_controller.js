Spa.controller("ProductCtrl", ["$scope", "$stateParams", "ProductService", "CartService", function($scope, $stateParams, ProductService, CartService) {

  $scope.product = ProductService.makeProducts()[$stateParams.productID];

  $scope.addProduct = function(objectID) {
    CartService.addItem(objectID, $scope.productQuantity);
    $scope.productQuantity = 0;
  }

}])