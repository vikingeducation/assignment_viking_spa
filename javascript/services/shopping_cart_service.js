VikingStore.factory('ShoppingCartService', function() {
  _items = []; // { [product: '{id: x, name:apple }', quantity: 2],.. }
  var ShoppingCartService = {};

  ShoppingCartService.listAll = function() {
    return _items;
  };

  ShoppingCartService.find = function(product) {
    for (var i = 0; i < _items.length; i++) {
      if (product.id === _items[i].product.id) {
        return _items[i];
      }
    }
  };

  ShoppingCartService.addItem = function(product, quantity) {
    item_in_cart = ShoppingCartService.find(product);
    if ( item_in_cart === undefined) {
      _items.push({product: product, quantity: quantity});
      _extendItem(_items[_items.length - 1]);
    } else {
      item_in_cart.quantity = quantity;
    }
  };

  ShoppingCartService.removeItem = function(object) {
    for (var i = 0; i < _items.length; i++) {
      if (item.id === _items[i].product.id) {
        return _items.splice(i, 1);
      }
    }
  };

  ShoppingCartService.getTotal = function(){
    var total = 0;
    for(var i = 0; i < _items.length; i++){
      total += _items[i].product.price * _items[i].quantity;
    }
    return total;
}

  var _extendItem = function(item) {
    item.incrQty = function() {
      item.quantity += 1;
    };
    item.decrQty = function() {
      item.quantity -= 1;
      if (item.quantity < 1)
        item.quantity = 1;
    };
  };

  return ShoppingCartService;
});