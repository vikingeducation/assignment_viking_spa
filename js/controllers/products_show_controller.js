app.controller('ProductsShowCtrl',
['$scope',
'product',
'ProductsService',
'_',
function($scope, product, ProductsService, _){
  $scope.product = product;
}]);
