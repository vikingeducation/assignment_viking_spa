store.controller('ProductsIndexCtrl', ['$scope', 'ProductsService', function($scope, ProductsService) {
    $scope.products = ProductsService.getProducts();
}]);
