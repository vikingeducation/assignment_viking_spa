app.controller('StoreCtrl', 
  ['$scope', '_', 'productsService','categoriesService', "cartService", '$stateParams',
  function($scope, _, productsService, categoriesService, cartService, $stateParams ) {

  //init
  categoriesService.createCategories();

  productsService.createProducts();

  $scope.categories = categoriesService.getCategories();
  $scope.products = productsService.getProducts();
  
}]);