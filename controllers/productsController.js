app.controller("ProductsCtrl", ["$scope", "productsService", "shoppingCartService", function($scope, productsService, shoppingCartService) {

  productsService.createProducts();

  $scope.products = productsService.getProducts();
  $scope.categories = productsService.getCategories();
  console.log($scope.categories);
  $scope.categoryId = -1;


  $scope.addToCart = function() {
    $shoppingCartService.addItem($scope.product.id, 1);
  }

}])