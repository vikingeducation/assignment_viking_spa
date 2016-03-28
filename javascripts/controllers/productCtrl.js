vikingStore.controller('productCtrl',
  ['$scope', 'productService',
  function($scope, productService) {

    $scope.categoryName = 'All Products';

    $scope.products = productService.getProducts();
    $scope.categories = productService.getCategories();

    // $scope.applyFilter = function(categoryN) {
    //   console.log(categoryN);
    //   $scope.categoryName = categoryN;
    // }
  }]);
