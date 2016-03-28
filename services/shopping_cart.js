store.factory( 'ShoppingCart', [
  function() {
    var obj = {};

    var _cartItems = [];

    obj.listAll = function() {
      return _cartItems;
    };

    obj.addItem = function(object, quantity) {

      // obj.removeItem(object);
        if( _productExists(object)){
          // console.log(_productExists(object) + " if");
          _cartItems[object.id].quantity += parseInt(quantity);
        }
        else{
          // console.log(_productExists(object) + " else");
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
      var bool = false;
      _cartItems.forEach(function(prod){
        console.log(prod.product.id, product.id);
        if(prod.product.id === product.id){

          bool = true;
        }
      });
      return bool;
    };

    obj.setQuantity = function(object, quantity){
      _cartItems[object.product.id].quantity = quantity;
      console.log(_cartItems[object.product.id].quantity);
    };

    return obj;
  }
]);
