app.controller("cartCtrl", ["$scope", "shoppingCartService", "productsService", function($scope, shoppingCartService, productsService){

  $scope.cart = shoppingCartService.listAll();
  $scope.products = productsService.getProducts();



  $scope.increaseQuantity = function(id) {
    shoppingCartService.increaseQuantity(id);
  }

  $scope.decreaseQuantity = function(id) {
    shoppingCartService.decreaseQuantity(id);
  }

  $scope.removeItems = function(id) {
    shoppingCartService.removeItem(id);
  }

  $scope.totalItems = shoppingCartService.totalItems();

}]);
