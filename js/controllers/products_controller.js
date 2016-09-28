app.controller('ProductsCtrl',
['$scope', 'ProductsService', 'CategoriesService', function($scope, ProductsService, CategoriesService) {

  CategoriesService.seed().then(function(data){
    $scope.categories = data;
    ProductsService.seed().then(function(data) {
      $scope.products = data;
    });
  });



  // ProductsService.getAll().then(function(data){
  //   $scope.products = data;
  // });

}]);
