var VikingStore = angular.module('VikingStore', ['ui.router']);


// inject the services provided by ui-router
VikingStore.config(function($stateProvider, $urlRouterProvider) {

});

VikingStore.run(function($rootScope){
  $rootScope.$on("$stateChangeError", console.log.bind(console));
});