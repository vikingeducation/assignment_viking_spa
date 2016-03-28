store.factory('CartService', function() {

  _cart = [];

  var addToCart = function(product, quantity) {
    product.inCart = true;
    _cart.push({ product: product, quantity: quantity});
    console.log(_cart);
  };

  var isProductInCart = function(product) {
    for (var i = 0; i < _cart.length; ++i) {
      var cartProduct = _cart[i];
      if (cartProduct.product == product) {
        return true;
      }
    }
    return false;
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

  return  {
    isProductInCart: isProductInCart,
    addToCart: addToCart,
    removeFromCart: removeFromCart,
    getCart, getCart
  };

});
