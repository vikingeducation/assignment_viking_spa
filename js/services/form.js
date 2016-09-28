vikingStore.factory('FormService', ['_', function(_){

    var _form = {};

    var getForm = function() {
      return _form;
    };

    var clearForm = function() {
      return angular.copy({}, _form);
    }

    var validForm = function() {
      return !_.isEmpty(_form)
    }

    return {
      getForm: getForm,
      clearForm: clearForm,
      validForm: validForm
    }

}])
