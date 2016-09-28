"use strict";

app.factory('categoriesService', ['_', function(_){

  var stub = {};


  var _id = 1;
  var _categories = [];

  stub.createCategories = function () {
  	var fakerCategories = [];
  	for(var i = 0; i < 20; i++){
  		 fakerCategories.push(faker.fake("{{commerce.department}}"));
  	}
  	fakerCategories = _.sortedUniq(fakerCategories);

  	for(var j = 0; j < fakerCategories.length; j++){
	  	_categories.push({name: fakerCategories[j], id: _id });
	  	_id ++;	
  	}
  };

  stub.getCategories = function(){
  	return _categories;
  };

  return stub;

}]);