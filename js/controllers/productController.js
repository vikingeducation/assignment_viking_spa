store.controller('productCtrl',
['$scope', 'categoryService', 'productService', 'cartService',
  function($scope, categoryService, productService, cartService) {
    $scope.categoryList = categoryService.generateCategoryList();
    $scope.productList = productService.generateProductList();
    
    $scope.addItem = function(product, quantity) {
      cartService.addItem(product, quantity);
      console.log(cartService.listAll());
      $scope.quantity = "";
    };
  }
]);
