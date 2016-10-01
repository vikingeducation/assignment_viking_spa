app.factory("cartService", [function(){

  var service = {};


  var _products = {};

  service.listAll = function(){
    return _products;
  };

  service.addItem = function(object, quantity){
    if(_products[object.id]){
      _products[object.id].quantity = quantity || _products[object.id].quantity + 1;
    } else {
      object.quantity = quantity;
      _products[object.id] = object;
    };


  };

  service.removeItem = function(object){
    delete _products[object.id];
  };



  return service;

}]);