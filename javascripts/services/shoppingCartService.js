app.factory('shoppingCartService', function(){

  var service = {};

  service.cart = {};


  service.listAll = function(){
    return service.cart;
  };

  service.addItem = function(object, formData){
    var itemCount = formData.quantity,
        productId = object.id;

    object.quantity = itemCount;

    service.cart[productId] = object;
    console.log(service.cart);
  };

  service.removeItem = function(keyId){
    delete service.cart[keyId];
    console.log(service.cart);
  };


  return service;

});