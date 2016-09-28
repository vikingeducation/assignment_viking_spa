VikingStore.controller("ProductsIndexCtrl", ["$scope", "productsService", "shoppingCartService", function($scope, productsService, shoppingCartService) {

  $scope.products = productsService.allProducts();

  $scope.productsArray = [];

  for(var product in $scope.products) {
    $scope.productsArray.push($scope.products[product])
  };


  $scope.addItemToCart = function(item, amnt) {
    shoppingCartService.addItemToCart(item, amnt);
  };

  $scope.cart = function() {
    return shoppingCartService.getCart();
  };

  $scope.categories = productsService.allCategories();

}])