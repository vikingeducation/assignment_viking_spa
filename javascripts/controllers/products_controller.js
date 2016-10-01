app.controller("ProductsCtrl", ['$scope', 'productService', 'cartService', function($scope, productService, cartService){

  $scope.products = productService.allProducts();

  $scope.categories = productService.allCategories();

  $scope.quantity = "1";
  $scope.addToCart = function(product, quantity){
    cartService.addItem(product, quantity);
  };


  $scope.cart = cartService.listAll();
}]);