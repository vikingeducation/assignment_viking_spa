store.factory( 'ShoppingCart', [ 'Products',
  function(Products) {
    var obj = {};

    var _cartItems = {};

    obj.listAll = function() {
      return _cartItems;
    };

    obj.totalItems = function() {
      var total = 0;

      for ( var i = 0; i < Products.getProducts().length; i++ ) {
        if (_cartItems[i]) {
          total += _cartItems[i].quantity;
        }
      }

      return total;
    };

    obj.totalPrice = function() {
      var total = 0;

      for ( var i = 0; i < Products.getProducts().length; i++ ) {
        if (_cartItems[i]) {
          total += _cartItems[i].quantity * _cartItems[i].product.price;
        }
      }

      return total;
    };

    obj.addItem = function(item, quantity) {
      // console.log(item, quantity);
      if( _cartItems[item.id] ){
        _cartItems[item.id].quantity += quantity;
      }
      else{
        _cartItems[item.id] = { product: item, quantity: quantity };
      }
      // console.log(_cartItems);
    };

    obj.removeItem = function(item) {
      if ( _cartItems[item.id] ) {
        delete _cartItems[item.id];
      }
    };

    // var _productExists = function(product){
    //   var bool = false;
    //   _cartItems.forEach(function(prod){
    //     console.log(prod.product.id, product.id);
    //     if(prod.product.id === product.id){
    //
    //       bool = true;
    //     }
    //   });
    //   return bool;
    // };

    // obj.setQuantity = function(object, quantity){
    //   _cartItems[object.product.id].quantity = quantity;
    //   console.log(_cartItems[object.product.id].quantity);
    // };

    return obj;
  }
]);
