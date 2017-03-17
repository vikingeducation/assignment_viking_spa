Spa.factory("CartService", ["_", function(_) {
  var CartService = {};

  var _cart = [];

  CartService.listAll = function() {
    return _cart;
  }

  CartService.addItem = function(objectID, quantity) {
    var existing, order;
    if ( existing = _.find(_cart, { item: objectID }) ) {
      console.log('updating cart')
      existing.quantity += quantity;
    } else {
      order = {
        item: objectID,
        quantity: quantity
      }
      _cart.push(order);
      console.log('adding order to cart')    
    }  
  }

  CartService.removeItem = function(objectID) {
    var order = _.find(_cart, { item: objectID });
    console.log("removing " + order)
    var i = _cart.indexOf(order);
    _cart.splice(i, 1);
  }

  return CartService;

}])