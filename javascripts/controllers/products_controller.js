viking.controller('ProductsCtrl', ['$scope', '$stateParams', 'productService', 'cartService', function($scope, $stateParams, productService, cartService) {

  console.log('got to products controller');

  $scope.product;
  $scope.currentCategory = 0;
  $scope.products = $scope.products || [];
  $scope.addToCart;

  if( !$scope.products.length ) {
    productService.setupProducts();
    $scope.categories = productService.getCategories();
    $scope.products = productService.getProducts();
  }

  $scope.addProduct = function(product) {
    $scope.products.push(product);
  };

  // $scope.setFilter = function(filterParam) {
  //   $scope.currentCategory = filterParam;
  // };

  $scope.findProduct = function( id)  {
    var retProd;

    // console.log($scope.products.length);
    $scope.products.forEach( function(product){ 
      if( product.id === +id ) {
        retProd = product;
      } 
    });

    return retProd;
  }

  if ($stateParams.id !== undefined) {
    $scope.product = $scope.findProduct( $stateParams.id )
  };

  $scope.addToCart = function(product) {
    console.log('adding item');
    console.log(product);
    cartService.addItem(product, 1);
  };

}]);