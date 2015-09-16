store.controller('productsCtrl',
  ['$scope', 'products', 'categories', '$stateParams', 'shoppingCart',
  function($scope, products, categories, $stateParams, shoppingCart) {

  $scope.products = products.getProducts();

  $scope.categories = categories.getAll();

  $scope.product = $scope.products[$stateParams.id];

  $scope.cart = shoppingCart.listAll();

  $scope.addToCart = function(product, quantity){
    shoppingCart.addItem(product, quantity);
  };


}]);