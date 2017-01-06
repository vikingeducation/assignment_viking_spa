VikingStore.controller('NavBarCtrl',
  ['$scope', 'ShoppingCartService',
  function($scope, ShoppingCartService) {
    $scope.items = ShoppingCartService.listAll();
    $scope.numItems = function() {
      return ShoppingCartService.numItems()
    }
}]);