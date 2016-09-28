app.factory("shoppingCartService", ["_", function(_) {

var _cart = {};

var listAll = function() {
  return _cart;
}

var addItem = function(item, quantity) {
  if(_cart[item]) {
    _cart[item] += quantity; 
  }
  else {
    _cart[item] = quantity;
  }
  
}

var removeItem = function(item, quantity) {
  if(quantity) { 
    _cart[item] -= quantity;
  }
  else {
    delete _cart[item];
  }
}


return {
  listAll: listAll,
  addItem: addItem,
  removeItem: removeItem
}


}]);