app.factory('CartsService', ['faker', function(faker) {

  var _cart = {};
  _cart.totalItems = 0;

  var addItem = function(item) {
    if (_cart[item.id]){
      _cart[item.id].quantity += 1;
    } else {
      _cart[item.id] = { id: item.id,
                         name: item.name,
                         price: item.price,
                         quantity: 1 };
    }
    _cart.totalItems++;
  };

  var removeItem = function(item) {
    if (_cart[item.id].quantity - 1 > 0) {
      _cart[item.id].quantity -= 1;
      _cart.totalItems--;
    } else {
      delete _cart[item.id];
      _cart.totalItems--;
    }
  };

  var updateItem = function(item, quantityChange) {
    if ((_cart[item.id].quantity + quanittyChange) >= 0) {
      _cart[item.id].quantity += quanittyChange;
    }
  };

  var cartTotal = function(){
    var total = 0;
    _.map(_cart, function(item){
      if (item.price) {
        total += Number(item.price) * Number(item.quantity);
      }
    });
    return total;
  };

  var getItemQuantity = function(item){
    if(_cart[item.id]){
      return _cart[item.id].quantity;
    } else {
      return 0;
    }
  };

  var getItemCount = function() {
    return _cart.totalItems;
  };

  return {
    addItem: addItem,
    removeItem: removeItem,
    updateItem: updateItem,
    getCart: function() {
      return _cart;
    },
    cartTotal: cartTotal,
    getItemQuantity: getItemQuantity,
    getItemCount: getItemCount
  };

}]);
