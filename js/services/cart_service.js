Spa.factory("CartService", ["_", function(_) {
  var CartService = {};

  var _cart = [];

  CartService.listAll = function() {
    return _cart;
  }

  CartService.addItem = function(object, quantity) {
    // look for existing orders with object in cart in case of an update
    var order = {
      item: object,
      quantity: quantity
    }
    _cart.push(order);
  }

  CartService.removeItem = function(object) {

  }

  return CartService;

}])