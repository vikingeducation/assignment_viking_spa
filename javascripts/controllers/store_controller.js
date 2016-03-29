store.controller('StoreCtrl', ['$scope', 'CartService', function($scope, CartService) {

  $scope.cartItems = CartService.getCart();

}])

