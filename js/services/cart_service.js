store.factory('cartService', ["productService", function(productService) {
  _cart = {}

  var addItem = function(product, quantity){
    _cart[product.id] = angular.copy(product, {});
    _cart[product.id].quantity = quantity;
  }

  var removeItem = function(product, quantity){
    if(_cart[product.id]){
      _cart[product.id] -= quantity;
    }
    if(_cart[product.id] < 0){
      _cart[product.id] = 0
    }
  }

  var get = function(){
    return _cart
  }

  var count = function(){
    var total = 0;
    for(var p_id in _cart) {
      total += _cart[p_id].quantity;
    }

    return total
  }

  return {
    get: get,
    addItem: addItem,
    removeItem: removeItem,
    count: count
  }
}]);
