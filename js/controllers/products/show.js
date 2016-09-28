vikingStore.controller('ProductsShowCtrl',
['$scope', '$stateParams', 'products', function($scope, $stateParams, products) {
  $scope.currentProduct = products[$stateParams.id];
}])
