store.controller('ProductsCtrl', ['$scope', 'productService', function($scope, productService) {
  productService.fake();
}]);