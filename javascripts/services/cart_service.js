vikingStore.factory('cartService', function(productService) {

  var cartItems = [];
  var categories = productService.getCategories();
  var obj = {}
  var productArray = [];

  obj.listAll = function() {
    return cartItems;
  };

  obj.getCartLength = function() {
    return cartItems.length;
  };

  obj.addItem = function(product, quantity) {
    
    var cartObj = {
      productId: product.id,
      name: product.name,
      price: product.price,
      quantity: quantity,
      category: categories[product.category].name
    };
   
    if (productArray.indexOf(cartObj.productId) == -1) {
      cartItems.push(cartObj);
      productArray.push(cartObj.productId);
    } else {
      for (var i = 0 ; i < cartItems.length ; i++) {
        if (cartItems[i].productId == product.id) {
          cartItems[i].quantity = Number(cartItems[i].quantity) + 1;
        }
      }
    }

  };

  obj.removeItem = function(id) {
    cartItems.splice(id, 1);
  }

  return obj;
});
