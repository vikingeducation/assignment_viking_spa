store.controller( 'ProductsCtrl', [
  '$scope', '$stateParams', 'Products', 'ShoppingCart',
  function( $scope, $stateParams, Products, ShoppingCart ) {

    $scope.products = Products.getProducts();
    $scope.categories = Products.getCategories();

    $scope.product = Products.getProduct( $stateParams.id );

    $scope.addProductCart = function(product, quantity){
      quantity = quantity || 1;
      ShoppingCart.addItem(product, quantity);
      // console.log("Added" + product.name);
    };

    // console.log($stateParams);


  }
]);
