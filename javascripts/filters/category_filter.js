vikingStore.filter('categoryFilter', function () {
  return function(items,category) {
    var filtered = [];
    for (var i = 0; i < items.length; i++) {
      var item = items[i];
       
      if (category == 'All Products') {
        filtered.push(item);
      }

      else if (item.category == category ) {
        filtered.push(item);
      }
    }

    return filtered;
  };
});
