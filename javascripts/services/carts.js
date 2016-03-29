viking.factory('cartService', function() {
  var obj = {};
  var cartItems = cartItems || [];

  obj.listAll = function() {
    return cartItems;
  };

  obj.addItem = function(object, quantity) {
    var item;

    cartItems.forEach(function(cartItem) {
      if (cartItem.object === object) {
        item = cartItem;
      };
    });

    if (!item) {
      item = {object: object, quantity: 0};
      cartItems.push(item);
    };

    item.quantity++;
  };

  obj.removeItem = function(object) {
    cartItems[object] = 0;
  };

  return obj;
})