store.factory("shoppingCarts", function(){

  var obj = {};

  _cartItems = {size: 0};

  obj.listAll = function(){
    return _cartItems;
  };

  obj.addItem = function(product, quantity){
    
    var name = product.name;
    
    _cartItems[name] = {
                          product: product,
                          quantity: quantity
                       };
  };

  obj.removeItem = function(product){
    var name = product.name;
    _cartItems[name] = undefined;
  };

});