app.factory('CartsService', ['faker', function(faker) {

  var _cart = {};

  var addItem = function(item, quantity) {
    _cart[item.id] = {id: item.id, price: item.price, quantity: quantity};
  };

  var removeItem = function(item) {
    if (_cart[item.id].quantity) {
      delete _cart[item.id];
    }
  };

  var updateItem = function(item, quantityChange) {
    if ((_cart[item.id].quantity + quanittyChange) >= 0) {
      _cart[item.id].quantity += quanittyChange;
    }
  };

  return {
    addItem: addItem,
    removeItem: removeItem,
    updateItem: updateItem,
    getCart: function() {
      return _cart;
    }
  };

}]);
