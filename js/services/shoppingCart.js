"use strict";
app.factory('cartService', ['_', function(_){
	var stub = {};

	var _cart = [];

	var _total = 0;

	stub.listAll = function(){
		return _cart;
	};

	stub.deleteItem = function(item) {
		_.remove(_cart, { item: item });
	};

	stub.getTotal = function(){
		return _total;
	}


	stub.addItem = function(object, quantity){



		if(_.find(_cart, {item: object})){
			// deletes the item if it reaches 0
			if ( (_.find(_cart, {item: object})).quantity + quantity <= 0) {
				_total -= object.price;
				stub.deleteItem(object);
			} else {

			// else just incre/decrement score
				_.find(_cart, {item: object}).quantity += quantity;
					_total += object.price * quantity;
			}

		}

		else{
			_cart.push({item: object, 
					quantity: quantity});
			_total += object.price * quantity;	
		}
	};

	
	return stub;
}]);