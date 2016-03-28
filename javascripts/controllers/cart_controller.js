store.controller('CartCtrl', ['$scope', 'CartService', function($scope, CartService) {

  $scope.cartItems = CartService.getCart();

  $scope.getCartTotal = function() {
    return CartService.getCartTotal();
  };


}]);