VikingStore.controller("ProductsShowCtrl", ["$scope", "productsService", "$stateParams", "shoppingCartService", function($scope, productsService, $stateParams, shoppingCartService) {

  $scope.product = productsService.getProduct($stateParams.id);

  $scope.addItemToCart = function(item, amnt) {
    shoppingCartService.addItemToCart(item, amnt);
  }

  $scope.cart = function() {
    return shoppingCartService.getCart();
  }

  $scope.categories = productsService.allCategories();

}]);