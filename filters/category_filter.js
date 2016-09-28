spa.filter('categoryFilter', ['_', function(_){

  return function(collection, categorySelection) {
    if (!categorySelection || !categorySelection.length) { return collection; }

    console.log(_.filter(collection, function(item){
      return _.intersection(item.categories, categorySelection);
    }).length)

    return _.filter(collection, function(item){
      return _.intersection(item.categories, categorySelection);
    });
  };

}]);