app.controller('StoreCtrl', 
  ['$scope', '_', 'productsService','categoriesService', "cartService", '$stateParams', 'categorical',
  function($scope, _, productsService, categoriesService, cartService, $stateParams, categorical ) {

  //init
  alert('sldfjosdfmd');

  console.log('sdlkfjsdlf');
  console.log(categorical);
  debugger;
  categoriesService.createCategories();

  productsService.createProducts();

  $scope.categories = categoriesService.getCategories();
  $scope.products = productsService.getProducts();
  
}]);