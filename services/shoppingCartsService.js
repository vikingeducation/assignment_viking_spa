VikingStore.factory("shoppingCartsService", ["_", function(_) {

  var _shoppingCart = {}
  var _numItems = 0;

  var addItemToCart = function(itemName, amnt) {
    _shoppingCart[itemName] = amnt;
    _numItems += amnt;
  };

  var getCart = function() {
    return _shoppingCart;
  };


  var numItems = function() {
    return _numItems;
    console.log(_numItems)
  }



  return {
    addItemToCart: addItemToCart,
    getCart: getCart,
    numItems: numItems
  }
}]);