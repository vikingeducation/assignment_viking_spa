VikingStore.controller('CartIndexCtrl',
  ['$scope', 'ProductService', 'ShoppingCartService',
  function($scope, ProductService, ShoppingCartService) {

    $scope.items = ShoppingCartService.listAll();

  }]);