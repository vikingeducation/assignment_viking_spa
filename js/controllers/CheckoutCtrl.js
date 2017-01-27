store.controller('CheckoutCtrl', ['$scope', '$state', 'cartService',
  function($scope, $state, cartService) {

    $scope.formData = {};
    $scope.cart = cartService.get();
    $scope.totalCost = cartService.getTotal();


    $scope.checkValid = function(form, state, sameAsShipping){
      console.log("form in checkValid", form)
      if(form.$valid) {
        if(form.$name === "paymentForm" && sameAsShipping){
          console.log("We're here!")
          $scope.formData.billingAddress = $scope.formData.billingAddress || {}
          angular.copy($scope.formData.address, $scope.formData.billingAddress)
        }
        $state.go(state)
      }
    }

    $scope.processOrder = function(){
      cartService.reset();
      $scope.formData = {};
    }
  }]);
