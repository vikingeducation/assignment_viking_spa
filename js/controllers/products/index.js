vikingStore.controller('ProductsIndexCtrl', ['$scope', 'products', 'categories', 'cart', function($scope, products, categories, cart){

  $scope.products = products;

  $scope.categories = categories;

  $scope.cart = cart;

  $scope.getLength = function() {
    return Object.keys($scope.cart).length;
  };


}])
