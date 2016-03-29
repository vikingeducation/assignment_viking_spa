store.controller('productCtrl',
['$scope', 'categoryService', 'productService', 'cartService',
  function($scope, categoryService, productService, cartService) {

    console.log("hello");

    $scope.categoryList = categoryService.generateCategoryList();
    $scope.productList = productService.generateProductList();
    $scope.cart = {};

    $scope.addItem = function(product, quantity) {
      cartService.addItem(product, quantity);
      console.log(cartService.listAll());
      $scope.quantity = "";
    };

    $scope.listAll = function(){
      $scope.cart = cartService.listAll();
    };

    console.log("bye");
  }
]);
