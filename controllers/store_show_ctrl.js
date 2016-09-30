spa.controller('StoreShowCtrl', ["$scope", "productService", '$stateParams', 'cartService', function($scope, productService, $stateParams, cartService){

  $scope.addQuantity = "1";
  $scope.product = productService.findProduct($stateParams.product_id);

  $scope.addItem = function() {
    cartService.addItem($scope.product, $scope.addQuantity);
  };

}]);
