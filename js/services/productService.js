vikingStore.factory('productService', [function() {

  var productService = {};

  productService.categories = [{'id':1,'name':'Electronics'},{'id':2,'name':'Toys'},{'id':3,'name':'Garden'},{'id':4,'name':'Industrial'},{'id':5,'name':'Sports'},{'id':6,'name':'Computers'},{'id':7,'name':'Home'},{'id':8,'name':'Movies'}];
  productService.products = [{'id':1,'name':'Generic Wooden Pizza','price':'320.58','description':'Earum asperiores id nihil atque ab id dicta est.\nIllum sint sequi et tempora voluptatum commodi voluptatem corrupti quia.\nQuasi vel cupiditate voluptatem ipsum consequatur qui omnis.','category':{'id':2,'name':'Toys'}},{'id':2,'name':'Tasty Fresh Pants','price':'20.75','description':'Facilis architecto voluptatem ipsam est vel qui ullam.\nOptio ab at ipsa amet facere culpa sint eum eaque.\nDignissimos rerum quia doloribus voluptates.','category':{'id':2,'name':'Toys'}},{'id':3,'name':'Ergonomic Cotton Mouse','price':'984.72','description':'Doloremque atque aut omnis dolorum provident voluptates facilis.\nAt accusantium quia dolor ut.\nRatione laudantium commodi.\nIn est mollitia optio.\nRecusandae enim qui eveniet dolores pariatur.','category':{'id':4,'name':'Industrial'}},{'id':4,'name':'Tasty Concrete Chair','price':'17.10','description':'Molestiae velit aut vitae.\nCum impedit qui ratione et quasi qui.\nIpsum quis quas.\nDolor distinctio culpa qui ad vero mollitia.\nConsequatur quia non fugit ut non a odit quis.\nAccusantium incidunt consectetur dolores corrupti nam.','category':{'id':2,'name':'Toys'}},{'id':5,'name':'Refined Concrete Soap','price':'84.26','description':'Vitae omnis asperiores fugiat veniam quia facilis modi qui dolores.\nAliquam qui facere quo corrupti quibusdam ipsa cupiditate et excepturi.\nQuae debitis id facilis deleniti sint.','category':{'id':3,'name':'Garden'}},{'id':6,'name':'Handcrafted Plastic Chips','price':'141.44','description':'Quae porro corrupti placeat enim cum aperiam qui ut.\nDistinctio molestias mollitia.\nCulpa amet natus est aut.\nIncidunt distinctio sed tempora ea deleniti occaecati quod ut sed.','category':{'id':1,'name':'Electronics'}},{'id':7,'name':'Refined Fresh Pants','price':'952.73','description':'Facere beatae quaerat officiis.\nLibero nihil laudantium accusantium maiores ut ipsa voluptas voluptatibus eaque.\nAut pariatur sit aut provident excepturi harum reiciendis natus ipsum.','category':{'id':6,'name':'Computers'}},{'id':8,'name':'Gorgeous Granite Salad','price':'387.99','description':'Qui ipsam et nesciunt nihil ratione corrupti voluptate aliquid veritatis.\nEum doloremque aut quibusdam qui quia velit cumque.\nEos dolorem sint mollitia qui officiis nulla et doloribus.','category':{'id':5,'name':'Sports'}},{'id':9,'name':'Fantastic Rubber Table','price':'960.14','description':'Debitis voluptas qui.\nVoluptatem veniam quia dolor recusandae voluptatibus.\nIpsam eum vitae.','category':{'id':3,'name':'Garden'}},{'id':10,'name':'Tasty Concrete Pizza','price':'663.79','description':'Commodi saepe neque quibusdam cum voluptatem.\nDolore assumenda eius voluptatem sed nisi beatae et.\nIure modi harum voluptatem corrupti pariatur odit est libero ea.\nQuos esse quo error qui nesciunt.','category':{'id':8,'name':'Movies'}},{'id':11,'name':'Small Wooden Shirt','price':'446.58','description':'Aut libero quia dolor voluptas doloribus.\nDistinctio veniam quam modi.\nEos optio accusamus rerum quo nisi qui.\nQuibusdam dolorem aliquid eius sunt in rerum et commodi.\nHarum qui architecto aut quis.\nRerum quis consectetur.','category':{'id':1,'name':'Electronics'}},{'id':12,'name':'Gorgeous Wooden Car','price':'946.88','description':'Facilis fugiat dolorum quos eius quaerat molestiae at et doloribus.\nUt est esse qui nulla at et qui aspernatur.\nDolor enim aut.\nVero optio reiciendis quod laudantium aut voluptate est et quia.','category':{'id':1,'name':'Electronics'}},{'id':13,'name':'Intelligent Rubber Pizza','price':'773.84','description':'Cum est quo laudantium omnis enim laborum.\nRem iusto et sint recusandae.\nCupiditate aut in et voluptas.\nConsequatur necessitatibus officia magni.\nEt repellendus sint quod earum nemo ratione et.','category':{'id':2,'name':'Toys'}},{'id':14,'name':'Licensed Cotton Towels','price':'253.85','description':'Veritatis non voluptas distinctio.\nBlanditiis et aspernatur eos repellendus.\nPorro natus quibusdam corporis animi.\nEt repudiandae velit fugiat optio voluptates et et accusamus quia.\nEt laboriosam temporibus eveniet accusamus.\nQui rerum cum.','category':{'id':8,'name':'Movies'}},{'id':15,'name':'Practical Granite Shoes','price':'142.15','description':'Aut doloremque nisi.\nOmnis qui dolorem qui aut voluptatum unde nemo.\nPorro officiis asperiores commodi nam nostrum ex reiciendis est perferendis.\nEa non dolores aut aut illo minima laudantium.\nTempora aut nisi et ducimus cumque rerum facere voluptates illum.','category':{'id':2,'name':'Toys'}},{'id':16,'name':'Handmade Steel Bacon','price':'441.67','description':'Qui asperiores rerum earum aut sit et.\nAut doloremque nostrum non reprehenderit autem maiores.\nVoluptate voluptates possimus reiciendis architecto.','category':{'id':3,'name':'Garden'}},{'id':17,'name':'Sleek Steel Ball','price':'357.35','description':'Quo totam consequatur libero quod quia ea qui.\nAperiam vitae quia et autem maiores fugiat nam.\nAccusantium temporibus aspernatur earum sit et deleniti eligendi et dolorem.\nConsequatur vel in ea similique et dolore et.\nDolores voluptas nemo illo et perspiciatis numquam velit facilis ullam.\nEos libero necessitatibus veniam consequuntur voluptas tenetur.','category':{'id':1,'name':'Electronics'}},{'id':18,'name':'Awesome Fresh Fish','price':'413.69','description':'Eius quia delectus amet id dignissimos voluptas nobis nihil.\nQuas error id cum consequatur voluptatem.\nCorrupti reprehenderit quasi.','category':{'id':6,'name':'Computers'}},{'id':19,'name':'Handmade Concrete Bike','price':'593.49','description':'Magni dolor soluta necessitatibus velit.\nQuia veniam quos temporibus.\nSit deserunt omnis.\nAdipisci facere quod omnis voluptatem rerum.\nQuam minima quos et dignissimos in aliquid laboriosam.','category':{'id':5,'name':'Sports'}},{'id':20,'name':'Unbranded Rubber Table','price':'288.61','description':'Ad numquam laudantium debitis.\nEaque nostrum omnis voluptatibus molestiae magni molestiae sed.\nExplicabo voluptate optio quasi maiores.\nProvident est est.','category':{'id':6,'name':'Computers'}},{'id':21,'name':'Ergonomic Cotton Hat','price':'301.02','description':'Rem unde in omnis consequatur et totam.\nMolestiae illum ipsa.\nDeleniti suscipit voluptate eos beatae et sit esse.\nEt magni sit ut aliquid est incidunt.\nAutem deleniti nostrum aut perferendis.','category':{'id':4,'name':'Industrial'}},{'id':22,'name':'Rustic Soft Fish','price':'249.44','description':'Explicabo iure atque.\nQui quia velit et.\nAperiam facere modi voluptatum et repellendus aut aut distinctio et.\nMaxime fugiat animi quia odit laboriosam modi sed deserunt ut.\nId consequatur inventore autem.\nTempore ducimus qui rerum neque sit dolores.','category':{'id':4,'name':'Industrial'}},{'id':23,'name':'Licensed Granite Cheese','price':'924.67','description':'Vel eum iste.\nVoluptas est possimus.\nCorporis voluptate voluptatem tempore.\nDicta ipsam voluptatem nesciunt tenetur culpa libero quis corrupti.','category':{'id':7,'name':'Home'}},{'id':24,'name':'Practical Rubber Keyboard','price':'550.74','description':'Tempora impedit quaerat et assumenda dolorum excepturi velit.\nUt vel cum ipsa voluptas dolorum.\nRepudiandae nesciunt est ullam eum.\nAut facilis ut eaque ut quos libero.\nUt repellendus quas commodi libero harum eveniet.','category':{'id':1,'name':'Electronics'}}];

// Mimic API data response
  productService.getProducts = function() {
    /*var response = this.products.map( function(product, i) {
      product.category = productService.getCategory(product.category_id)
    });
    return response;*/
    return this.products;
  };

  productService.findProduct = function(id) {
    return this.products.filter(function(product) {
      return (product.id === id)
    })[0];
  };

/*
  productService.getCategory = function(id) {
    return this.categories.filter( function(category) {
      return (category.id === id);
    })[0];
  };
*/

// Faker functions to seed data
/*  productService.categories = [];
  for(i = 1; i < 9; i++) {
    var cat = {
      id: i,
      name: faker.commerce.department()
    };
    productService.categories.push(cat);
  };
*/


/*  productService.products = [];
  for(i = 1; i < 25; i++) {
    var prod = {
      id: i,
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      description: faker.lorem.paragraph(),
      category_id: productService.randomCategory()
    };
    productService.products.push(prod);
  };
*/
/*
  productService.randomCategory = function() {
    var i = Math.floor(Math.random()*productService.categories.length);
    return productService.categories[i];
  };
*/
  return productService;
}])