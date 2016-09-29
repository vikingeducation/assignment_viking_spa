VikingStore.factory("shoppingCartsService", ["_", function(_) {

  var _shoppingCart = {}
  var _numItems = 0;

  var addItemToCart = function(itemName, amnt) {
    amnt = Number(amnt)
    if (_shoppingCart[itemName]) {
      _numItems -= Number(_shoppingCart[itemName])
    }
    if (amnt) {
      _shoppingCart[itemName] = amnt;
      _numItems += amnt;
    } else if (!amnt) {
      deleteItem(itemName);
    }
  };

  var getCart = function() {
    return _shoppingCart;
  };


  var numItems = function() {
    return _numItems;
    console.log(_numItems)
  };

  var deleteItem = function(itemName) {
    _numItems -= Number(_shoppingCart[itemName])
    delete _shoppingCart[itemName];
  };

  return {
    addItemToCart: addItemToCart,
    getCart: getCart,
    numItems: numItems,
    deleteItem: deleteItem
  }
}]);