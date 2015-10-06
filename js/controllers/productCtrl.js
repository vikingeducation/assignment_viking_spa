vikingStore.controller('ProductCtrl',
  ['$scope', '$stateParams', 'productService', 'shoppingCart',
  function($scope, $stateParams, productService, shoppingCart) {

    $scope.product_id = Number($stateParams.id);
    $scope.product = productService.findProduct($scope.product_id);
    $scope.quantity = shoppingCart.getQuantity($scope.product_id) || 1;

    $scope.addItem = function(){
      shoppingCart.addItem($scope.product, $scope.quantity);
    };

}]);