define([
		"client/module/dashboard/home/directive/tourquicksearch/controller",
		//"client/module/dashboard/home/directive/shoppingcart/controller"
	],function(){
	angular.module("dashboard").controller('searchTourController', Controller);

	Controller.$inject=['$scope'];
	
	function Controller($scope){
		var vm=this;
		loadSearchOption(vm);
		vm.doSearch=doSearch
		
	 }
	 function doSearch(model){
	 	var logger=ioc.resolve("ILogger");
	 	logger.info(model);
	 }
	 function loadSearchOption(vm){
	 	var localStore = ioc.resolve("ILocalStore");
		var searchOptions = localStore.get("tourSearch");
		localStore.remove("tourSearch");
		vm.searchOptions=searchOptions||{};
	 }
});