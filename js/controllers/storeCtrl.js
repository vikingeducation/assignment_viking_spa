"use strict";

app.controller('StoreCtrl', 
  ['$scope', '_', 'productsService','categoriesService', '$stateParams', 
  function($scope, _, productsService, categoriesService, $stateParams) {

  //init
  categoriesService.createCategories();

  productsService.createProducts();

  $scope.categories = categoriesService.all();
  $scope.products = productsService.all();
  
}]);

