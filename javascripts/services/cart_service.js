vikingStore.factory('cartService', function(productService) {

  var cartItems = [];
  var categories = productService.getCategories();
  var obj = {}

  obj.listAll = function() {
    return cartItems;
  };

  obj.addItem = function(product, quantity) {
    var cartObj = {
      name: product.name,
      price: product.price,
      quantity: quantity,
      category: categories[product.category].name
    };
    cartItems.push(cartObj);
  };

  obj.removeItem = function() {

  }

  return obj;
});
