store.controller('productCtrl',
['$scope', 'categoryService', 'productService', 'cartService', '$stateParams',
  function($scope, categoryService, productService, cartService, $stateParams) {

    console.log("hello");

    $scope.categoryList = categoryService.getCategoryList();
    $scope.productList = productService.getProductList();
    $scope.cart = cartService.listAll();
    $scope.cartLength = cartService.getCartLength();
    $scope.quantity = "";

    $scope.getProduct = function() {
      return productService.getProduct($stateParams.id);
    };

    $scope.getProductById = function(productId) {
      return productService.getProduct(productId);
    };

    $scope.getCategory = function(categoryId) {
      return categoryService.getCategory(categoryId);
    };

    $scope.addItem = function(product, quantity) {
      cartService.addItem(product, quantity);
      console.log(cartService.listAll());
      $scope.quantity = "";
      $scope.cartLength = cartService.getCartLength();
    };

    $scope.removeItem = function(productId) {
      cartService.removeItem(productId);
      $scope.cartLength = cartService.getCartLength();
    };

    $scope.updateItem = function(productId, quantity) {
      cartService.updateItem(productId, quantity);
    };

    $scope.totalPrice = function() {
      return cartService.totalPrice();
    };

    $scope.listAll = function(){
      $scope.cart = cartService.listAll();
    };

    console.log("bye");
  }
]);
