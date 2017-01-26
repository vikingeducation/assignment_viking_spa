store.controller('CheckoutCtrl', ['$scope', '$state', 'cartService',
  function($scope, $state, cartService) {

    $scope.formData = {};

    $scope.checkValid = function(form, state){
      console.log("form in checkValid", form)
      if(form.$valid) {
        $state.go(state)
      }
    }
  }]);
