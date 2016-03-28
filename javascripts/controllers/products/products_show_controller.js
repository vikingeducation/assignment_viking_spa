store.controller('ProductsShowCtrl', ['$scope', 'product', function($scope, product) {

  console.log(product);
  $scope.product = product;

}]);
