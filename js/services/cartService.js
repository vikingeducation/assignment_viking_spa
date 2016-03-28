store.factory('cartService', function() {

  var _cart = {};

  var listAll = function() {
    return _cart;
  };

  var addItem = function(object, quantity) {
      _cart[object] = quantity;
  };

  var removeItem = function() {
  };

  return {
    listAll: listAll,
    addItem: addItem,
    removeItem: removeItem
  };

});
