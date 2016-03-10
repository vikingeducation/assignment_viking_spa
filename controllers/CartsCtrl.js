// ----------------------------------------
// CartsCtrl
// ----------------------------------------


VikingSPA.controller('CartsCtrl',
  ['$scope', '$stateParams', 'cartService',
  function($scope, $stateParams, cartService) {

    $scope.cart = {
      add: cartService.add,
      remove: cartService.remove,
      all: cartService.all
    };

  }]);




