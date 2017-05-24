app.controller("ProductsIndexCtrl",
  ['$scope', "productService", "shoppingCartService", function($scope, productService, shoppingCartService){
    $scope.products = productService.products;
    $scope.categories = ['', 'Summer', 'Fall', 'Winter', 'Spring'];


}]);
