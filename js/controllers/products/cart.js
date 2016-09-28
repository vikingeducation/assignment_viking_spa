vikingStore.controller('ProductsCartCtrl', ['$scope', 'cart', 'products', 'CartService', function($scope, cart, products, CartService) {
  $scope.cart = cart;
  $scope.products = products
  $scope.editing = false;

  $scope.addItem = function(id, quantity) {
    CartService.addItem(id, quantity);
  }
}]);
