VikingStore.factory('CategoriesService', [function(){
  // --------------
  // Private
  // --------------

  var _categories = {
  	"0": {
  		id: 0,
  		name: "Axe",
  		products_ids: [0,1,2,3,4,5,6,7,8,9]
  	},
  	"1": {
  		id: 1,
  		name: "Sword",
  		products_ids: []
  	},
  	"2": {
  		id: 2,
  		name: "War Hammer",
  		products_ids: []
  	}
  };

  // --------------
  // Public
  // --------------

  var CategoriesService = {};

  CategoriesService.all = function(){
  	return _categories;
  };

  return CategoriesService;
}])