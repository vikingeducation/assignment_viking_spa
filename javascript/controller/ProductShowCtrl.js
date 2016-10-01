VikingStore.controller('ProductShowCtrl', ['$scope', 'product', 'CartService', function ($scope, product, CartService) {
	$scope.product = product;

	$scope.quantity = 0;

	$scope.addToCart = function (product, quantity) {
		CartService.addItem(product, quantity);
	};

}]);
