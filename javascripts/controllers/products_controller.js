viking.controller('ProductsCtrl', ['$scope', '$stateParams', 'productService', function($scope, $stateParams, productService) {

  productService.setupProducts();
  console.log('got to products controller');

  $scope.productFilter = '';
  $scope.categories = productService.getCategories();
  $scope.products = productService.getProducts();

  $scope.addProduct = function(product) {
    $scope.products.push(product);
  };

  $scope.setFilter = function(filterParam) {
    $scope.productFilter = filterParam;
  };

  if ($stateParams.id !== undefined) {
    $scope.product = $scope.products[0];
    console.log($stateParams);
  };


}]);