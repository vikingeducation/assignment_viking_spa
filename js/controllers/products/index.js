vikingStore.controller('ProductsIndexCtrl', ['$scope', 'productsService', function($scope, productsService){

  $scope.products = productsService.getProducts();

  $scope.categories = productsService.getCategories();


}])