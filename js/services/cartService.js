app.factory('cartService', function(){
  var obj={}

  // _cart = {id: {product: product, quantity: integer}}

  _cart = {};

  obj.listAll = function(){
    return _cart;
  }

  // If we have 1 of product 3
  // Then we add 8 more of product 3
  // is it going to be 9 of product 3 or 8 of product 3
  // Update vs add?

  // If quantity becomes negative remove from cart

  obj.addItem = function(product, qty){
    // if (!qty) return;
    // If we found the product, update the quantity.
    if (_cart[product.id]) {
      _cart[product.id].quantity = qty;
    } else {
      // If we didn't add it to the _cart with the current quantity.
      _cart[product.id] = { product: product, quantity: qty };
    }

    // If there are 0 or negative amount of products, remove the product.
    if (_cart[product.id].quantity < 1) removeItem(product);
  }

  obj.removeItem = function(product){
    _cart[product.id] = null;
  }




  return obj;
});
