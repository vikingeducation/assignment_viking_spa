clothingStore.factory('shoppingCartService',[
  'productsService',
  function(productsService){

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

    obj.cartTotal = function(){
      var total = 0;
      for(var productID in _cart) {
        var price = productsService.findProduct(productID).price;
        var quantity = _cart[productID];
        total += price*quantity;
      }
      console.log(total);
      return total;
    };

    return obj;

  }]);