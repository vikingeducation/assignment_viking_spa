VikingStore.controller('ProductsShowCtrl',
  ['$scope', '$state', '$stateParams', 'ProductService',
  function($scope, $state, $stateParams, ProductService) {
    $scope.options = ['1', '2', '3', '4'];
    $scope.product = ProductService.find($stateParams.id);

}]);