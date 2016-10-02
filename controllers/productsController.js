app.controller("ProductsCtrl", ["$scope", "productsService", "shoppingCartService", function($scope, productsService, shoppingCartService) {

  productsService.createProducts();

  $scope.products = productsService.getProducts();
  $scope.categories = productsService.getCategories();
  $scope.categoryId = -1;
  $scope.totalItems = shoppingCartService.totalItems();


  $scope.addToCart = function(id) {
    shoppingCartService.addItem(id, 1);
    $scope.totalItems = shoppingCartService.totalItems();

  }

}])