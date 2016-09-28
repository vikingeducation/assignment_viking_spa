vikingStore.controller('ProductsCheckoutCtrl', ['$scope', 'cart', 'products', 'form', 'FormService', '$state', 'CartService', function($scope, cart, products, form, FormService, $state, CartService){

  $scope.cart = cart;
  $scope.products = products;
  $scope.userFormData = form;
  $scope.placeOrder = function() {
    FormService.clearForm();
    CartService.clearCart();
    $state.go('products.checkout.orderPlaced')
  }

}])
