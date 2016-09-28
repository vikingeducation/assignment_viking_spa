VikingStore.controller("ProductsIndexCtrl", ["$scope", "productsService", function($scope, productsService) {

  $scope.products = productsService.allProducts();

}])