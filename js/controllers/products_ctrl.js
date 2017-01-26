store.controller('ProductsCtrl', ['$scope', 'productService', 'categoryService', function($scope, productService, categoryService) {
  $scope.products = productService.get();
  $scope.categories = categoryService.get();
}]);
