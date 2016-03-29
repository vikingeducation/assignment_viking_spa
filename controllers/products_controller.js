store.controller( 'ProductsCtrl', [
  '$scope', '$stateParams', 'Products', 'ShoppingCart',
  function( $scope, $stateParams, Products, ShoppingCart ) {

    $scope.products = Products.getProducts();
    $scope.categories = Products.getCategories();

    $scope.product = Products.getProduct( $stateParams.id );

    $scope.addProductCart = function(product, quantity) {
      console.log(product,quantity)
      ShoppingCart.addItem(product, quantity);
    };

    $scope.cartItems = { total: ShoppingCart.totalItems() };
  }
]);
