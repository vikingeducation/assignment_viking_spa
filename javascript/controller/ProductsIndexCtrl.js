VikingStore.controller('ProductsIndexCtrl', ['$scope', 'ProductService', function ($scope, ProductService) {
	$scope.categoryFilter;

	$scope.categories = ProductService.allCategories();

	$scope.products = ProductService.allProducts();

}]);
