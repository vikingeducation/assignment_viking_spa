store.controller('productCtrl',
['$scope', 'categoryService', 'productService',
  function($scope, categoryService, productService) {
    $scope.categoryList = categoryService.generateCategoryList();
    $scope.productList = productService.generateProductList();
  }
]);
