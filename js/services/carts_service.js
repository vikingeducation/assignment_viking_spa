app.factory('CartsService', ['faker', function(faker) {

  var _cart = {};

  var addItem = function(item) {
    _cart[item.id] = item;
  };

  var removeItem = function(item_id) {
    delete _cart[item_id];
  };

  return {
    addItem: addItem,
    removeItem: removeItem,
    getCart: function() {
      return _cart;
    }
  };

}]);
