VikingStore.controller('ProductsShowCtrl',
  ['$scope', '$state', '$stateParams', 'ProductService',
  function($scope, $state, $stateParams, ProductService) {

    $scope.product = ProductService.find($stateParams.id);

}]);