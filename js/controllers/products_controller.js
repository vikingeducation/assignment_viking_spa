app.controller('ProductsCtrl',
['$scope', 'ProductsService', 'CategoriesService', function($scope, ProductsService, CategoriesService) {

  CategoriesService
    .seed()
    .then(function(data){
      $scope.categories = data;
    })
    .then(ProductsService.seed)
    .then(function(data) {
      $scope.products = data;
    })
    .then(function(data) {
      console.log($scope.products);
    });


  // ProductsService.getAll().then(function(data){
  //   $scope.products = data;
  // });


  // ProductsService.seed().then(function(data) {
  //   $scope.products = data;
  // }).then(function(data) {
  //   console.log($scope.products);
  // });
}]);
