app.controller("cartCtrl", ["$scope", "shoppingCartService", "productsService", function($scope, shoppingCartService, productsService){

  $scope.cart = shoppingCartService.listAll();
  $scope.products = productsService.getProducts();



  $scope.increaseQuantity = function(id) {
    //shoppingCartService.removeItem(id.quantity++;
  }

  $scope.decreaseQuantity = function() {
    if($scope.quantity > 0) {
      $scope.quantity--;
    }
  }


}]);
