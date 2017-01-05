VikingStore.controller('CartIndexCtrl',
  ['$scope', 'ProductService', 'ShoppingCartService',
  function($scope, ProductService, ShoppingCartService) {

    $scope.items = ShoppingCartService.listAll();
    $scope.getTotal = function() {
      return ShoppingCartService.getTotal();
    }

  }]);