vikingStore.factory('shoppingCart',
  ['productService',
  function(productService) {

  var shoppingCart = {};

  shoppingCart.items = [];
  // { product_id: quantity, ... , }


  shoppingCart.listAll = function() {
    return shoppingCart.items.map( function(item) {
      item['product'] = productService.findProduct(item.id)
    });
  };


  shoppingCart.addItem = function(product, quantity) {
    if (quantity) {
      //update to new quantity
      shoppingCart.items[product.id] = quantity;
    } else
    {
      // create or add 1
      var currentQuantity = shoppingCart.items[product.id] || 0;
      shoppingCart.items[product.id] = currentQuantity + 1;
    }
    console.log(shoppingCart.items);
  };


  shoppingCart.removeItem = function(product_id) {
    delete shoppingCart.items[product_id];
  };


  shoppingCart.getQuantity = function(product_id) {
    return shoppingCart.items[product_id];
  };


  return shoppingCart;

}]);