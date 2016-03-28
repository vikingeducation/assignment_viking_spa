store.controller( 'ProductsCtrl', [
  '$scope', '$stateParams', 'Products',
  function( $scope, $stateParams, Products ) {

    $scope.products = Products.getProducts();
    $scope.categories = Products.getCategories();
    

  }
]);
