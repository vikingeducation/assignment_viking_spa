VikingStore.controller("ProductsShowCtrl", ["$scope", "productsService", "$stateParams", "shoppingCartsService", function($scope, productsService, $stateParams, shoppingCartsService) {

  $scope.product = productsService.getProduct($stateParams.id);

  $scope.addItemToCart = function(item, amnt) {
    shoppingCartsService.addItemToCart(item, amnt);
  }

  $scope.cart = shoppingCartsService.getCart();

  $scope.categories = productsService.allCategories();

}]);