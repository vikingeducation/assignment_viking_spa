VikingStore.controller('ProductsIndexCtrl', ['$scope', 'ProductService', 'CartService', function ($scope, ProductService, CartService) {
	$scope.categoryFilter;
	$scope.quantity = 0;

	$scope.categories = ProductService.allCategories();

	$scope.products = ProductService.allProducts();

	$scope.addToCart = function (product, quantity) {
		CartService.addItem(product, quantity);
	};

}]);
