storeApp.factory("catServ", ['$window', function($window){
  var _cats = {
    "1": {id: 1, name: "Small"},
    "2": {id: 2, name: "Medium"},
    "3": {id: 3, name: "Large"}
  };

  var obj = {};

  obj.all = function(){
    return _cats;
  };

  obj.getCategory = function(id){
    return _cats["id"];
  };

  return obj;

}]);
