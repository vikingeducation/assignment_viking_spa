// ----------------------------------------
// Cart Service
// ----------------------------------------

VikingSPA.factory('cartService', function() {

  var service = {},
      _items = [];

  service.all = function() {
    return _items;
  };

  service.add = function(product, quantity) {
    var existing = _.find(_items, function(item) {
      return item.product.id === product.id;
    });

    var item;

    if (existing) {
      item = existing;
      item.quantity += quantity;
    } else {
      item = {
        product: product,
        quantity: quantity
      };
      _items.push(item);
    }

  };

  service.remove = function(id) {
    _items = _.reject(_items, function(item, i) {
      return item.product.id === id;
    });
  };

  return service;

});




