store.controller( 'ProductsCtrl', [
  '$scope', '$stateParams', 'Products',
  function( $scope, $stateParams, Products ) {

    $scope.id;

    $scope.products = Products.getProducts();
    $scope.categories = Products.getCategories();

    $scope.product = Products.getProduct( $stateParams.id );
    $scope.quantity;

    console.log($stateParams);
  }
]);
