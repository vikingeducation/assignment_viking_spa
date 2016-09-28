"use strict";

app.factory('categoriesService', [function(){

  var stub = {};


  var _id;
  var _categories = [];

  stub.createCategories = function () {

  };

  stub.david = function() {
    console.log(faker.fake("{{commerce.department}}"));
  }

  return stub;

}]);