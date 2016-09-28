vikingStore.controller('ProductsIndexCtrl', ['$scope', 'productsService', 'products', 'categories', function($scope, productsService, products, categories){

  $scope.products = products;

  $scope.categories = categories;


}])
