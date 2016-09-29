VikingStore.controller("CartCtrl", ["$scope", "productsService", "shoppingCartsService", "$timeout", function($scope, productsService, shoppingCartsService, $timeout) {

  $scope.cart = shoppingCartsService.getCart();
  $scope.numItemsInCart = shoppingCartsService.numItems();
  $scope.success = {}
  $scope.addItemToCart = function(itemName, amnt, index) {
    $scope.success[index] = "Quantity has been updated"
    $timeout(function() {
      $scope.success[index] = "";
    }, 3000)
    shoppingCartsService.addItemToCart(itemName, amnt);
    $scope.quantity = "";
  };
}]);