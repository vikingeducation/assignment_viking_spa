clothingStore.controller('MainCtrl', ['$scope',
                            'productsService',
                            'categoriesService',
                            'shoppingCartService',
                            '$stateParams',
                            function( $scope,
                                      productsService,
                                      categoriesService,
                                      shoppingCartService,
                                      $stateParams){

// Categories

  // categoriesService.createCategories(); As this gets called everytime the controller is instantiated, we moved the initialization into an IFFE in the categories Service.
  $scope.categories = categoriesService.categories;

  $scope.findCategory = function(id) {
    return categoriesService.findCategory(id);
  };

// Products

  // productsService.createProducts(); As this gets called everytime the controller is instantiated, we moved the initialization into an IFFE in the products Service.
  $scope.products = productsService.products;

  $scope.findProduct = function() {
    return productsService.findProduct($stateParams.productID);
  };

  $scope.findProductByID = function(id) {
    return productsService.findProduct(id);
  };

// Shopping Cart

  $scope.cart = shoppingCartService.listAll;

  $scope.addToCart = function(productID, quantity) {
    shoppingCartService.addItem(productID, quantity);
  };

  $scope.removeFromCart = function(productID) {
    shoppingCartService.removeItem(productID);
  };

  $scope.updateCart = function(productID, quantity) {
    shoppingCartService.updateItem(productID, quantity);
  };

  $scope.cartValue = function() {
    return shoppingCartService.cartTotal();
  };

}]);