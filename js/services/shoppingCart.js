"use strict";
app.factory('cartService', ['_', function(_){
	var stub = {};

	var _cart = [];

	stub.listAll = function(){
		return _cart;
	};

	stub.deleteItem = function(item) {
		_.remove(_cart, { item: item });
	};


	stub.addItem = function(object, quantity){



		if(_.find(_cart, {item: object})){
			// deletes the item if it reaches 0
			if ( (_.find(_cart, {item: object})).quantity + quantity <= 0) {
				stub.deleteItem(object);
			} else {

			// else just incre/decrement score
				_.find(_cart, {item: object}).quantity += quantity;
			}

		}

		else{
			_cart.push({item: object, 
					quantity: quantity});	
		}
	};

	
	return stub;
}]);