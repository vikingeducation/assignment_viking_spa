vikingStore.controller('ProductsIndexCtrl', ['$scope', 'products', 'categories', 'CartService', function($scope, products, categories, CartService){

  $scope.products = products;

  $scope.categories = categories;

  $scope.cart = CartService.listAll();


}])
