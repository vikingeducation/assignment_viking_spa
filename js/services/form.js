vikingStore.factory('FormService', [function(){

    var _form = {};

    var getForm = function() {
      return _form;
    };

    var clearForm = function() {
      return angular.copy({}, _form);
    }

    return {
      getForm: getForm,
      clearForm: clearForm
    }

}])
