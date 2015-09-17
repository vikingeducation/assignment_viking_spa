app.controller("MainCtrl", ['$scope',
                            '$timeout',
                            '$stateParams',
                            'productService',
                            'cartService',
                            function($scope, $timeout, $stateParams, productService, cartService){
  $scope.categories = productService.getCategories();
  $scope.products = productService.getProducts();
  $scope.product = $scope.products[$stateParams.id] ;
  $scope.cart = cartService.listAll();
  $scope.total = cartService.total;
  $scope.flashText = "";
  $scope.addItem = function(product, qty) {
    $scope.flashText = $scope.flashText.replace(/.*/, "Item Quantity Updated!");

    cartService.addItem(product, qty);
    $timeout(function(){
      $scope.flashText = "";
    }, 2000);
  };

}]);
