store.factory('CartService', function() {

  _cart = [];

  var addToCart = function(product, quantity) {
    if (product.inCart) {
      for (var i = 0; i < _cart.length; i++) {
        if (_cart[i].product == product) {
          _cart[i].product = quantity;
        }
      }
    } else {
      product.inCart = true;
      _cart.push({ product: product, quantity: quantity});
    }
  };


  var removeFromCart = function(product) {
    product.inCart = false;
    var productIndex;
    _cart.forEach(function(cartProduct, index) {
      if (cartProduct.product == product) {
        productIndex = index;
      }
    });
    _cart.splice(productIndex, 1);
    console.log(_cart);
  };

  var getCart = function() {
    return _cart;
  };


  var getCartTotal = function() {
    var total = 0;
    for (var i = 0; i < _cart.length; i++) {
      console.log("price: " + _cart[i].product.price)
      console.log("quantity: " + _cart[i].quantity)
      total += (_cart[i].product.price * _cart[i].quantity)
    }
    console.log(total)
    return total;
  };


  return  {
    addToCart: addToCart,
    removeFromCart: removeFromCart,
    getCart: getCart,
    getCartTotal: getCartTotal
  };

});
