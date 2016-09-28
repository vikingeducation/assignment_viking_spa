app.filter("filterByCategory", function() {
  return function(collection, categoryID) {
    if(categoryID === String(-1)) { return collection }
    var filteredCollection = []

    for(var p in collection) {
      if(collection[p].categories.includes(parseInt(categoryID))) {
        filteredCollection.push(collection[p])
      }
    }
    return filteredCollection;
  };
});