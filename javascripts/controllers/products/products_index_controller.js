store.controller('ProductsIndexCtrl', ['$scope', 'products', 'categories', 'CartService', function($scope, products, categories, CartService) {

    $scope.products = products;
    $scope.categories = categories;
    $scope.categories.unshift({
        id: "",
        name: 'All'
    });

    $scope.addToCart = function(product) {
      CartService.addToCart(product, 1);
    };

    $scope.removeFromCart = function(product) {
      CartService.removeFromCart(product);
    };

    $scope.selectedCategory = "";

}]);
