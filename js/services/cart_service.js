store.factory('cartService', ["productService", function(productService) {
  _cart = {}

  var addItem = function(product, quantity){
    _cart[product.id] = quantity
  }

  var removeItem = function(product, quantity){
    if(_cart[product.id]){
      _cart[product.id] -= quantity;
    }
    if(_cart[product.id] < 0){
      _cart[product.id] = 0
    }
  }

  var listAll = function(){
    returnObj = {};
    for(var productid in _cart){
      var product = productService.find(productid);
      returnObj[productid] = product;
      product["quantity"] = _cart[productid];
    }
    return returnObj
  }

  var count = function(){
    var total = 0;
    for(var p_id in _cart) {
      total += _cart[p_id];
    }

    return total
  }

  return {
    listAll: listAll,
    addItem: addItem,
    removeItem: removeItem
  }
}]);
