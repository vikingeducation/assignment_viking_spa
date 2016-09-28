app.controller('ProductsCtrl',
['$scope', 'ProductsService', function($scope, ProductsService) {

  ProductsService.all().then(function(data) {
    $scope.products = data;
    console.log($scope.products);
  });

}]);
