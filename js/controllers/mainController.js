app.controller("MainCtrl", ['$scope', 'productService', function($scope, productService){
  $scope.categories = productService.getCategories();
  $scope.products = productService.getProducts();
  
}])
