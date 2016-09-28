VikingStore.controller("ProductsIndexCtrl", ["$scope", "productsService", function($scope, productsService) {

  $scope.products = productsService.allProducts();
  $scope.categories = productsService.allCategories();

}])