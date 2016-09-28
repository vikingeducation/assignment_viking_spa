VikingStore.controller("CartCtrl", ["$scope", "productsService", "shoppingCartsService", function($scope, productsService, shoppingCartsService) {

  $scope.cart = shoppingCartsService.getCart();

  $scope.numItemsInCart = shoppingCartsService.numItems();

}]);