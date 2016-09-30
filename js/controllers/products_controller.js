VikingStore.controller("ProductsController", ["$scope", 'CategoriesService', 'ProductsService', function($scope, CategoriesService, ProductsService){
	$scope.products = ProductsService.all();

	$scope.categories = CategoriesService.all();

}])