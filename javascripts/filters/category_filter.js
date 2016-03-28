
viking.filter( 'categoryFilter', function(  ) {

  return function( products, category ) {
    productSubset = [];
    // console.log( typeof category);
    // console.log( category );
    products.forEach( function(product){
      // console.log( typeof product.categoryid );
      if( category === 0 || product.category_id === category ) {
        productSubset.push( product )
      }
    });
    return productSubset;
  };


});
