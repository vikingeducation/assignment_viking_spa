vikingStore.controller('productCtrl',
  ['$scope', 'productService',
  function($scope, productService) {

    $scope.products = productService.getProducts();
    $scope.categories = productService.getCategories();

  }]);
