clothingStore.factory('shoppingCartService',[
  function(){

    var obj = {};
    var _cart = {};  // product.id : quantity

    obj.listAll = function(){
      return _cart;
    };

    obj.addItem = function(productID, quantity){
      if ( _cart[productID] ){
        _cart[productID] += parseInt(quantity);
        console.log(_cart);
      } else {
        _cart[productID] = parseInt(quantity);
        console.log(_cart);
      }
    };

    obj.removeItem = function(productID){
      if ( _cart[productID] ) {
        delete _cart[productID];
      }
    };

    obj.updateItem = function(productID, quantity){
      if(_cart[productID]){
        _cart[productID] = parseInt(quantity);
        console.log(_cart);
      }
    };

    return obj;

  }]);