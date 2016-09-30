VikingStore.controller("ProductsController", ["$scope", 'CategoriesService', 'ProductsService', function($scope, CategoriesService, ProductsService){

	// ------------
	// Private
	// ------------

	var _chunk = function(array, size){
		var newArray = [];
		for (var i=0; i < array.length; i += size){
			newArray.push(array.slice(i, i+ size));
		};
		return newArray;
	};

	// ProductsController.moveProductsToArray
	var _moveProductsToArray = function(object){
		var array = [];
		var keys = Object.keys(object);
		for(var i = 0;i < keys.length; i++){
			array.push(object[keys[i]]);
		};
		return array;
	};

	var _productsInObject = ProductsService.all();

	// ------------
	// Public
	// ------------

	$scope.categories = CategoriesService.all();

	// Converting products into  groups.
	$scope.productsInChunks = _chunk(_moveProductsToArray(_productsInObject), 3)

}])