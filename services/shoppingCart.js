store.factory("shoppingCart", function(){

  var obj = {};

  var _cartItems = [];

  obj.listAll = function(){
    return _cartItems;
  };

  obj.addItem = function(product, quantity){

    console.log("add " + quantity + " to product " + product.name)
    for (var i = 0; i < _cartItems.length; i++) {
      if (_cartItems[i].product.name == product.name) {
        _cartItems[i].quantity += quantity
        return;
      }
    };
    _cartItems.push({ product: product,
                      quantity: quantity })
  };

  obj.removeItem = function(product){
    for (var i = 0; i < _cartItems.length; i++) {
      if (_cartItems[i].name === product.name) _cartItems.splice(i, 1);
    }
  };

  // var _updateSize = function () {
  //   var total = 0;
  //   for (key in _cartItems) {
  //     total += _cartItems[key].quantity
  //   }
  //   console.log(total)
  //   return obj.size = total;
  // }

  // obj.getSize = function () {
  //   return _size;
  // }

  return obj;

});