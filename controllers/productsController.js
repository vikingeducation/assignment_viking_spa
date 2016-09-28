app.controller("ProductsCtrl", ["$scope", "productsService", function($scope, productsService) {

  productsService.createProducts();

  $scope.products = productsService.getProducts();
  $scope.categories = productsService.getCategories();

  $scope.categoryId = -1;

}])