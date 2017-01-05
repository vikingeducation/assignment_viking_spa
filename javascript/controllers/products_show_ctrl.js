VikingStore.controller('ProductsShowCtrl',
  ['$scope', '$state', '$stateParams', 'ProductService', 'ShoppingCartService',
  function($scope, $state, $stateParams, ProductService, ShoppingCartService) {
    $scope.options = ['1', '2', '3', '4'];
    $scope.product = ProductService.find($stateParams.id);

    $scope.addToCart = function(product, quantity) {
      ShoppingCartService.addItem(product, parseInt(quantity));
    }
}]);