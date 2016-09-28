app.controller("ProductsCtrl", ["$scope", "productsService", function($scope, productsService) {

  productsService.createProducts();
  
  $scope.getProducts = function() {
    productsService.getProducts();
  }

  
}])