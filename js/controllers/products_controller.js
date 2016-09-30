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

	var _returnProductsFromCategory = function(){
		var array = [];
		var products_ids = $scope.categories[$scope.category.id].products_ids;
		for (var i = 0; i < products_ids.length; i++){
			array.push(_productsInObject[products_ids[i] + ""]);
		};
		return array;
	};

	// ------------
	// Public
	// ------------

	$scope.category = {id: "all"};

	$scope.categories = CategoriesService.all();

	$scope.filterByCategory = function(){
		var array;
		if ($scope.category.id === "all"){
			array = _moveProductsToArray(_productsInObject);
		} else {
			array = _returnProductsFromCategory();
		};

		$scope.productsInChunks = _chunk(array, 3)
	};

	// Converting products into  groups.
	$scope.productsInChunks = _chunk(_moveProductsToArray(_productsInObject), 3)

}])