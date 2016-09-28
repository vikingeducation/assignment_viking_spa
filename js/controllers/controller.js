"use strict";

app.controller('StoreCtrl', ['$scope', '_', 'productsService','categoriesService', function($scope, _, productsService, categoriesService) {

  categoriesService.createCategories();
  
}]);