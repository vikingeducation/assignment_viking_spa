app.factory('CartsService', ['faker', function(faker) {

  var _cart = {};

  var addItem = function(item) {
    if (_cart[item.id]){
      _cart[item.id].quantity += 1;
    } else {
      _cart[item.id] = { id: item.id, price: item.price, quantity: 1 };
    }
  };

  var removeItem = function(item) {
    if (_cart[item.id].quantity - 1 > 0) {
      _cart[item.id].quantity -= 1;
    } else {
      delete _cart[item.id];
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
      total += Number(item.price) * Number(item.quantity);
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

  return {
    addItem: addItem,
    removeItem: removeItem,
    updateItem: updateItem,
    getCart: function() {
      return _cart;
    },
    cartTotal: cartTotal,
    getItemQuantity: getItemQuantity
  };

}]);
