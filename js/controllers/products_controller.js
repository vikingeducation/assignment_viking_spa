VikingStore.controller("ProductsController", ["$scope", 'CategoriesService', 'ProductsService', function($scope, CategoriesService, ProductsService){

	var _productsInObject = ProductsService.all();

	// ProductsController.moveProductsToArray
	var _moveProductsToArray = function(){
		$scope.productsInArray = [];
		var keys = Object.keys(_productsInObject);
		for(var i = 0;i < keys.length; i++){
			$scope.productsInArray.push(_productsInObject[keys[i]]);
		};
	};

	_moveProductsToArray();

	$scope.categories = CategoriesService.all();

	$scope.chunk = function(array, size){
		var newArray = [];
		for (var i=0; i < array.length; i += size){
			newArray.push(array.slice(i, i+ size));
		};
		return newArray
	};

	$scope.productsInArray;

}])