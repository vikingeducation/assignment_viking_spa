"use strict";
app.factory('cartService', ['_', function(_){
	var stub = {};

	var _cart = [];

	stub.listAll = function(){
		return _cart;
	};

	stub.addItem = function(object, quantity){
		if(_.find(_cart, {item: object})){
			_.find(_cart, {item: object}).quantity += quantity;
		}
		else{
			_cart.push({item: object, 
					quantity: quantity});	
		}
	};

	// stub.removeItem = function(){

	// }
	return stub;
}]);