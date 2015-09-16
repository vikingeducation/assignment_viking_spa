app.controller("MainCtrl", ['$scope',
                            '$stateParams',
                            'productService',
                            'cartService',
                            function($scope, $stateParams, productService, cartService){
  $scope.categories = productService.getCategories();
  $scope.products = productService.getProducts();
  //$scope.product = $scope.products[$stateParams.id] ;
  $scope.cart = cartService.listAll();
  $scope.addItem = function(product, qty) {
    cartService.addItem(product, qty);
  };

  // $scope.listProducts = function(){
  //   var list = [];
  //   for (key in cart) {
  //     list.push(cart[key].product);
  //   }
  //   return list
  // }

  // $scope.removeItem = cartService.removeItem;
}]);
