app.controller("ProductsIndexCtrl",
  ['$scope', "productService", function($scope, productService){
    $scope.products = productService.products;
    $scope.categories = ['', 'Summer', 'Fall', 'Winter', 'Spring',]
  }]
);
