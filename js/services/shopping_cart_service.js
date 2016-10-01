VikingStore.factory('ShoppingCartService', [function(){

	// --------------
	// Private
	// --------------

	var _shoppingCart = {};

	// --------------
	// Public
	// --------------

	var ShoppingCartService = {};

	ShoppingCartService.listAll = function(){
		return _shoppingCart;
	};

	ShoppingCartService.addItem = function(object, quantity){
		if( !_shoppingCart[object.id] ){
			_shoppingCart[object.id] = object;
		};

		_shoppingCart[object.id].quantity = quantity;
	};

	ShoppingCartService.removeItem = function(productId){
		delete _shoppingCart[productId];
	};

	return ShoppingCartService;

}]);