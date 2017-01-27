store.controller('ProductCtrl', ['$scope', '$stateParams', 'productService', 'cartService',
  function($scope, $stateParams, productService, cartService) {
    $scope.product = productService.find($stateParams.productId);
    $scope.quantity = 1;

    $scope.addToCart = function (product, quantity){
      cartService.addItem($scope.product, $scope.quantity);
    };
  }]);
