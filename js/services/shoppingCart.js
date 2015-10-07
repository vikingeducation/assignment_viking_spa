vikingStore.factory('shoppingCart',
  ['productService',
  function(productService) {

  var shoppingCart = {};

  shoppingCart.items = {};
  // { product_id: quantity, ... , }


  shoppingCart.listAll = function() {
    var itemDetails = [];
    for (product_id in shoppingCart.items) {
      var product = {
                      product: productService.findProduct(Number(product_id)),
                      quantity: shoppingCart.items[product_id]
                    };
      itemDetails.push(product);
    };
    return itemDetails;
  };


  shoppingCart.addItem = function(product, quantity) {
    if (quantity) {
      //update to new quantity
      shoppingCart.items[product.id] = quantity;
    } else {
      // create or add 1
      var currentQuantity = shoppingCart.items[product.id] || 0;
      shoppingCart.items[product.id] = currentQuantity + 1;
    }
  };


  shoppingCart.removeItem = function(product_id) {
    delete shoppingCart.items[product_id];
  };


  shoppingCart.getQuantity = function(product_id) {
    return shoppingCart.items[product_id];
  };


  shoppingCart.updateCart = function(cartItems) {
    cartItems.forEach( function(item) {
      shoppingCart.addItem(item.product, item.quantity)
    });
  };


  return shoppingCart;

}]);