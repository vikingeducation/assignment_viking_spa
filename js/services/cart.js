vikingStore.factory('CartService', [function(){

    var _cart = {};

    var listAll = function() {
      return _cart;
    };

    var addItem = function(id, quantity) {
      _cart[id] = quantity;
    };

    var removeItem = function(id) {
      delete _cart[id];
    };

    var clearCart = function() {
      return angular.copy({}, _cart);
    }

    return {
      listAll: listAll,
      addItem: addItem,
      removeItem: removeItem,
      clearCart: clearCart
    }

}])
