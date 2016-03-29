store.factory('cartService',
['productService',
  function(productService) {

    // {productId: quantity}
    var _cart = {};

    var listAll = function() {
      return _cart;
    };

    var addItem = function(productId, quantity) {
      if (_car[productId]) _cart[productId] += quantity;
      else _cart[productId] = quantity;
    };

    var removeItem = function(productId) {
      if (_cart[productId]) delete _cart[productId];
    };

    var updateItem = function(productId, quantity) {
      if (_cart[productId]) _cart[productId] = quantity;
    };

    var totalPrice = function() {
      var total = 0;
      for (var productId in _cart) {
        var price = productService.getProduct(productId).price;
        var quantity = _cart[productId];
        total += price * quantity;
      }
      return total;
    };

    return {
      listAll: listAll,
      addItem: addItem,
      removeItem: removeItem,
      updateItem: updateItem,
      totalPrice: totalPrice
    };

}]);
