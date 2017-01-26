store.controller('ProductsCtrl', ['$scope', 'productService', 'categoryService', 'cartService',
 function($scope, productService, categoryService, cartService) {
  $scope.products = productService.get();
  $scope.categories = categoryService.get();

  $scope.addToCart = function (product){
    cartService.addItem(product, 1);
  }
}]);
