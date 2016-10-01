app.controller("ProductShowCtrl", ['$scope', 'productService', '$stateParams', 'cartService', function($scope, productService, $stateParams, cartService){

  $scope.product = productService.find($stateParams.id);

  $scope.quantity = "1";

  $scope.addToCart = function(product, quantity){
    cartService.addItem(product, quantity);
  };

  //$scope.cartLength = Object.keys(cartService.listAll()).length;
}]);