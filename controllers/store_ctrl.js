spa.controller('StoreCtrl', ["$scope", "productService", 'cartService', function($scope, productService, cartService){


  $scope.products = productService.getProducts();
  $scope.categories = productService.getCategories();
  $scope.cart = cartService.listAll();

}]);
