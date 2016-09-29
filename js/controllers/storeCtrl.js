"use strict";

app.controller('StoreCtrl', 
  ['$scope', '_', 'productsService','categoriesService', "cartService", '$stateParams',
  function($scope, _, productsService, categoriesService, cartService, $stateParams ) {


  //init
  categoriesService.createCategories();

  productsService.createProducts();

  $scope.categories = categoriesService.all();
  $scope.products = productsService.all();

  $scope.addItem = function(){
  	cartService.addItem($scope.product, $scope.quantity);
  };
  
  $scope.cartNum = function(){
  	return cartService.listAll().length;
  };
}]);