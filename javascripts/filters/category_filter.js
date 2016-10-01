app.filter('categoryFilter', ['_', function(_){

  return function(products, selectedCategory){
    if(!selectedCategory || !selectedCategory.length){return products;}
    
    var selectedCategories = selectedCategory.map(function(category, index){
      return parseInt(category);
    });

    return _.filter(products, function(product){
      
      return _.intersection(product.categories, selectedCategories).length;
    });
  };


}]);