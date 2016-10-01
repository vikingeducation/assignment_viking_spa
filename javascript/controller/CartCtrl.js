VikingStore.controller('CartCtrl', ['CartService', '$scope', function (CartService, $scope) {
	$scope.cartItems = CartService.listAll();

	$scope.addOne = function (item) {
		CartService.addItem(item.product, 1);
	};

	$scope.deleteItem = function (item) {
		CartService.removeItem(item);
	};

	$scope.itemsCount = function () {
		return CartService.itemsCount();
	};
}]);
