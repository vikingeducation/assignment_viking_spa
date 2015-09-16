app.controller("MainCtrl", ['$scope',
                            '$stateParams',
                            'productService',
                            'cartService',
                            function($scope, $stateParams, productService, cartService){
  $scope.categories = productService.getCategories();
  $scope.products = productService.getProducts();
  $scope.product = $scope.products[$stateParams.id] ;
  $scope.cart = cartService.listAll();
  $scope.addItem = function(product, qty) {
    cartService.addItem(product, qty);
  }

  // $scope.removeItem = cartService.removeItem;
}]);
