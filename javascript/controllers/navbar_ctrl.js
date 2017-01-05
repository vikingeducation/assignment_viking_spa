VikingStore.controller('NavBarCtrl',
  ['$scope', 'ShoppingCartService',
  function($scope, ShoppingCartService) {
    $scope.items = ShoppingCartService.listAll();
}]);