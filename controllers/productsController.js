store.controller('productsCtrl',
  ['$scope', 'products', 'categories', '$stateParams', 'shoppingCarts',
  function($scope, products, categories, $stateParams, shoppingCarts) {

  $scope.products = products.getProducts();

  $scope.categories = categories.getAll();

  $scope.product = $scope.products[$stateParams.id];

  $scope.cart = shoppingCarts.listAll();

  $scope.addToCart = function(product, quantity){
    shoppingCarts.addItem(product, quantity);
  };


}]);