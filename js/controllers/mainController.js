app.controller("MainCtrl", ['$scope', 'productService', function($scope, productService){
  console.log(productService.getCategories());
}])
