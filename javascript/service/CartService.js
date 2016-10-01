VikingStore.factory('CartService', ['ProductService', function (ProductService) {
	var _cartProducts = {};
	var _count = 0;

	// public interface
	var CartService = {};

	CartService.listAll = function () {
		return _cartProducts;
	};

	CartService.addItem = function (product, quantity) {
		var item = {
			product: product,
			quantity: Number(quantity)
		};
		if (_cartProducts[product.id]) {
			_cartProducts[product.id].quantity += item.quantity;
		} else {
			_cartProducts[product.id] = item;
		};
		_count += item.quantity;
		console.log(_cartProducts);
	};

	CartService.removeItem = function (item) {
		_count -= Number(item.quantity);
		delete _cartProducts[item.product.id]
	};

	CartService.itemsCount = function () {
		return _count;
	};

	return CartService;
}]);
