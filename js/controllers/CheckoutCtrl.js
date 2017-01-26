store.controller('CheckoutCtrl', ['$scope', '$state', 'cartService',
  function($scope, $state, cartService) {

    $scope.checkValid = function(form){
      console.log("form in checkValid", form)
      if(form.$valid) {
        $state.go('checkout.payment')
      }
    }
  }]);
