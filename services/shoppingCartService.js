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

var increaseQuantity = function(id) {
  return _cart[id] ++;
}

var decreaseQuantity = function(id) {
  if(_cart[id] === 1 ) {
    removeItem(id);
  }
  if(_cart[id] > 0) {
    _cart[id]--;
  }
}

var removeItem = function(item, quantity) {
  if(quantity) {
    _cart[item] = quantity;
  }
  else {
    delete _cart[item];
  }
}

var totalItems = function(){
  var values = _.values(_cart);
  var sum = 0;

  for(var i in values) {
    sum += values[i]
  }
  return sum
}


return {
  listAll: listAll,
  addItem: addItem,
  removeItem: removeItem,
  increaseQuantity: increaseQuantity,
  decreaseQuantity: decreaseQuantity,
  totalItems: totalItems
}


}]);