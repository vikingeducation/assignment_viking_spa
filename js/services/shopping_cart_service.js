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
		// If not in the shopping cart
		if( !_shoppingCart[object.id] ){
			_shoppingCart[object.id] = object;
		};

		// If quantity is specified
		if(quantity){
			_shoppingCart[object.id].quantity = quantity;
		// Quantity is not specified and no quantity specifiec on object
		} else if( !_shoppingCart[object.id].quantity ) {
			_shoppingCart[object.id].quantity = 1;
		};
	};

	ShoppingCartService.removeItem = function(productId){
		delete _shoppingCart[productId];
	};

	return ShoppingCartService;

}]);