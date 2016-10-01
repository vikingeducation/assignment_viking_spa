VikingStore.directive('productDirective', function () {
	return {
		strict: "E",
		scope: {
			product: "="
		},
		templateUrl: "javascript/directive/products/ProductDirective.html"
	}
});
