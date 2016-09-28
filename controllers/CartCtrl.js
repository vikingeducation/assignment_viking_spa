VikingStore.controller("CartCtrl", ["$scope", "productsService", "shoppingCartsService", function($scope, productsService, shoppingCartsService) {

  $scope.cart = shoppingCartsService.getCart();
  $scope.numItemsInCart = shoppingCartsService.numItems();
  $scope.addItemToCart = function(itemName, amnt) {
    shoppingCartsService.addItemToCart(itemName, amnt);
    $scope.quantity = "";
  };
}]);