store.controller('ProductsCtrl', ['$scope', 'productService', function($scope, productService) {
  $scope.products = productService.get();
}]);