store.filter('categoryFilter', function(){
  return function( collection, category){
    if(!category){
      return collection;
    }
    category = JSON.parse(category);
    var filtered = [];
    collection.forEach(function(prod){
      if (prod.categoryID === category.id){
        console.log(category);
        filtered.push(prod);
      }
    });
    console.log(collection, category, filtered);
    return filtered;
  };
});
