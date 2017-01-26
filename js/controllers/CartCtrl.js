store.controller('CartCtrl', ['$scope', '$stateParams', 'productService', 'cartService',
  function($scope, $stateParams, productService, cartService) {
    $scope.cart = cartService.get()
  }]);