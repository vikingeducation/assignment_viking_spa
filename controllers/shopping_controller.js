store.controller( 'CartCtrl', [
  '$scope', '$stateParams', 'Products', 'ShoppingCart',
  function( $scope, $stateParams, Products, ShoppingCart ) {

    $scope.products = ShoppingCart.listAll();
    $scope.setQuantity = function(object, quantity){
      ShoppingCart.setQuantity(object, quantity);
    };

    console.log($scope.products);

  }
]);
