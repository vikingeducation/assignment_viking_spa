store.controller('ProductsCtrl', ['$scope', 'ProductsService', 'CartService', function($scope, ProductsService, CartService) {
  $scope.cart = CartService.getCart();
  console.log("HI");
}]);
