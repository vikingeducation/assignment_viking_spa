store.controller( 'CartCtrl', [
  '$scope', '$stateParams', 'Products', 'ShoppingCart',
  function( $scope, $stateParams, Products, ShoppingCart ) {


    $scope.products = ShoppingCart.listAll();
    console.log($scope.products);
  }
]);
