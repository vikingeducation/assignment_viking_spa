VikingStore.factory("shoppingCartsService", [function() {

  var _shoppingCart = {}

  var addItemToCart = function(itemName, amnt) {
    _shoppingCart[itemName] = amnt;
  };

  var getCart = function() {
    return _shoppingCart;
  }


  return {
    addItemToCart: addItemToCart,
    getCart: getCart
  }
}]);