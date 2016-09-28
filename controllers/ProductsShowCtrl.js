VikingStore.controller("ProductsShowCtrl", ["$scope", "productsService", "$stateParams", "shoppingCartsService", "$timeout", function($scope, productsService, $stateParams, shoppingCartsService, $timeout) {

  $scope.product = productsService.getProduct($stateParams.id);

  $scope.addItemToCart = function(item, amnt) {
    shoppingCartsService.addItemToCart(item, amnt);
    $scope.quantity = "";
    $scope.success = "Added to cart!"
    $timeout(function() {
      $scope.success = "";
    }, 3000)
  }

  $scope.cart = shoppingCartsService.getCart();

  $scope.categories = productsService.allCategories();

}]);