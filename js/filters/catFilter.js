"use strict";
app.filter('catFilter',['_', function(_){
	return function(collection, categoryId){
		return _.filter(collection, function(el){
			if(!categoryId){
				return true;
			}
			return(_.indexOf(el.categories, parseInt(categoryId)) >= 0);
		});
	};

}]);