vikingStore.controller('CheckoutCtrl', ['$scope', 'cart', 'products', function($scope, cart, products){

  $scope.cart = cart;
  $scope.products = products;
  $scope.userFormData = {};

}])