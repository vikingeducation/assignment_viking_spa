store.factory( 'ShoppingCart', [
  function() {
    var obj = {};

    var _cartItems = [];

    obj.listAll = function() {
      return _cartItems;
    };

    obj.addItem = function(object, quantity) {
      for ( var i = 0; i < quantity; i++ ) {
        _cartItems.push(object);
      }
    };

    obj.removeItem = function(item) {
      for ( var i = _cartItems.length - 1; i >= 0; i-- ) {
        if ( _cartItems[i].id === item.id ) {
          _cartItems.splice( i, 1 );
        }
      }
    };

    return obj;
  }
]);
