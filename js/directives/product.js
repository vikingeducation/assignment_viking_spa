VikingStore.directive('product', function(){

	return {
		restrict: "E",
		templateUrl: "/js/templates/products/product.html",
		scope: { addItem: "&", 
						 product: '=' }
	}

});