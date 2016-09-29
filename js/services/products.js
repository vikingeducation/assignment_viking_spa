"use strict";

app.factory('productsService', ['categoriesService', '_',function(categoriesService, _){

  var stub = {};

  var _products = [];

  var _id = 1;

  stub.createProducts = function(){
  	var categories = categoriesService.all();
  	for(var i = 0; i < 50; i++){
  		var prod = {id: _id,
  					name: faker.fake("{{commerce.productName}}"),
  					price: faker.fake("{{commerce.price}}"),
  					description: faker.fake("{{commerce.productAdjective}}, {{commerce.productMaterial}}")};
  		var prodCategories = [];
  		for(var j = 0; j < Math.floor(Math.random()*20 + 1); j ++){
  			prodCategories.push(_.sample(categories).id);
  		}
  		prodCategories = _.sortedUniq(prodCategories);
  		prod.categories = prodCategories;
  		_products.push(prod);
      _id++;
    }
    
  };
  stub.all = function() {
    return _products;
  };
 
  stub.getProduct = function(productId) {
    return _.find(_products, {id: parseInt(productId)});
  }

  return stub;

}]);