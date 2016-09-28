spa.factory("cartService", [function(){

  var _cart = {};

  var cartService = {};

  cartService.listAll = function() {
    return _cart;
  };

  cartService.addItem = function(object, quantity) {
    if (_cart[object.id]) {
      _cart[object.id].quantity = quantity || _cart[object.id].quantity + 1;
    } else {
      _cart[object.id] = {
        id: object.id,
        quantity: quantity || 1
      };
    }

    return _cart[object.id];
  };

  cartService.removeItem = function(object) {
    delete _cart[object.id];
  };


  return cartService;

}]);