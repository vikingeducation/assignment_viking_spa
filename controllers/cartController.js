app.controller("cartCtrl", ["$scope", "shoppingCartService", "productsService", function($scope, shoppingCartService, productsService){

  $scope.cart = shoppingCartService.listAll();
  $scope.products = productsService.getProducts();
  $scope.totalItems = shoppingCartService.totalItems();


  $scope.increaseQuantity = function(id) {
    shoppingCartService.increaseQuantity(id);
    $scope.totalItems = shoppingCartService.totalItems();
  }

  $scope.decreaseQuantity = function(id) {
    shoppingCartService.decreaseQuantity(id);
    $scope.totalItems = shoppingCartService.totalItems();
  }

  $scope.removeItems = function(id) {
    shoppingCartService.removeItem(id);
    $scope.totalItems = shoppingCartService.totalItems();
  }


}]);
