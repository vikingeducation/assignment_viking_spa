store.factory( 'ShoppingCart', [
  function() {
    var obj = {};

    var _cartItems = [];

    obj.listAll = function() {
      return _cartItems;
    };

    obj.addItem = function(object, quantity) {
      obj.removeItem(object);
        if(_productExists(object)){
          _cartItems[object.id].quantity = quantity;
        }
        else{
          _cartItems.push({product: object, quantity: quantity});
        }
    };

    obj.removeItem = function(item) {
      for ( var i = _cartItems.length - 1; i >= 0; i-- ) {
        if ( _cartItems[i].product.id === item.id ) {
          _cartItems.splice( i, 1 );
        }
      }
    };

    var _productExists = function(product){
      _cartItems.forEach(function(prod){
        if(prod.product.id === product.id){
          return true;
        }
      });
      return false;
    };

    return obj;
  }
]);
