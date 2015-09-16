var clothingStore = angular.module('clothingStore', ['ui.router']);


// Error handling
clothingStore.run(function($rootScope){
  $rootScope.$on('$stateChangeError', console.log.bind(console));
});