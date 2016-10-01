VikingStore.directive('productDirective', function () {
	return {
		strict: "E",
		scope: {
			product: "=",
			quantity: "=",
			addToCart: "&"
		},
		templateUrl: "javascript/directive/products/ProductDirective.html"
	}
});
