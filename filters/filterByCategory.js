app.filter("filterByCategory", function() {
  return function(collection, categoryID) {
    console.log(categoryID)
    if(categoryID === String(-1)) { return collection }
    var filteredCollection = []

    for(var p in collection) {
      console.log(collection[p].categories)
      if(collection[p].categories.includes(parseInt(categoryID))) {
        filteredCollection.push(collection[p])
      }
    }
    return filteredCollection;
  };
});