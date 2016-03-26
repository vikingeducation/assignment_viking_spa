vikingStore.factory('cartService', [function(){

  var _cart = [];

  var allItems = function(){
    return _cart;
  };

  var size = function(){
    var size = 0;
    _cart.forEach(function(item){
      size += item.quantity;
    });
    return size;
  };

  var value = function(){
    var value = 0;
    _cart.forEach(function(item){
      value += item.quantity * item.product.price;
    });
    return value;
  };

  var addItem = function(newItem){
    var exist = _cart.filter(function(cartItem){
      return cartItem.product.id == newItem.id;
    })[0];

    if (exist) {
      exist.quantity++;
    } else {    
      _cart.push({
        product: newItem,
        quantity: 1
      });
    }
  };

  var updateItem = function(item, newQuantity) {
    var exist = _cart.filter(function(cartItem){
      return cartItem.product.id == item.id;
    })[0];

    if (exist) {
      if (quantity === 0){
        removeItem(exist);
      } 
      exist.quantity = quantity;
    } 
  };

  var removeItem = function(item){
    console.log(item);
    var idx = _cart.indexOf(item);
    console.log(idx);
    _cart.splice(idx, 1);
  };

  return {
    allItems: allItems,
    addItem: addItem,
    removeItem: removeItem,
    size: size,
    value: value
  };

}]);