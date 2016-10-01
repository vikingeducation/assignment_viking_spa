app.controller("ProductsCtrl", ['$scope', 'productService', function($scope, productService){

  $scope.products = productService.allProducts();

  $scope.categories = productService.allCategories();
}]);