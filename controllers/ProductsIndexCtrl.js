VikingStore.controller("ProductsIndexCtrl", ["$scope", "productsService", "shoppingCartsService", function($scope, productsService, shoppingCartsService) {

  $scope.products = productsService.allProducts();

  $scope.productsArray = [];

  for(var product in $scope.products) {
    $scope.productsArray.push($scope.products[product])
  };


  $scope.addItemToCart = function(item, amnt) {
    shoppingCartService.addItemToCart(item, amnt);
    $scope.quantity = "";
  };

  $scope.cart = function() {
    return shoppingCartService.getCart();
  };

  $scope.categories = productsService.allCategories();

}])