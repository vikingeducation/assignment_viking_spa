vikingStore.controller('ProductsCheckoutCtrl', ['$scope', 'cart', 'products', 'form', 'FormService', '$state', 'CartService', function($scope, cart, products, form, FormService, $state, CartService){

  $scope.cart = cart;
  $scope.products = products;
  $scope.userFormData = form;
  $scope.placeOrder = function() {
    if (FormService.validForm()) {
      FormService.clearForm();
      CartService.clearCart();
      $state.go('products.checkout.orderPlaced')
      $scope.invalid = ""
    } else {
      $scope.invalid = "Your form is invalid"
    }
  }

  $scope.go = $state.go;

  $scope.updateBilling = function() {
    if ($scope.billingAndShipping) {
      console.log("hello");
      $scope.userFormData.billingStreet = $scope.userFormData.shippingStreet;
      $scope.userFormData.billingCity = $scope.userFormData.shippingCity;
      $scope.userFormData.billingState = $scope.userFormData.shippingState;
      $scope.userFormData.billingZip = $scope.userFormData.shippingZip;
    }
  }

}])
