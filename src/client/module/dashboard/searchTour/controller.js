define([
		"client/module/common/service/tourService",
		"client/module/dashboard/home/directive/tourquicksearch/controller",
		//"client/module/dashboard/home/directive/shoppingcart/controller"
	],function(tourService){
	angular.module("dashboard").controller('searchTourController', Controller);

	Controller.$inject=['$scope'];
	
	function Controller($scope){
		var vm=this;
		vm.doSearch=doSearch
		loadSearchOption(vm);
		loadTours(vm);
	 }

	 function loadTours(vm){
	 	tourService.getTours(vm.searchOptions).then(function(tours){
	 		vm.tours=tours;
	 	});
	 }
	 function doSearch(searchOptions){
	 	var logger=ioc.resolve("ILogger");
	 	logger.info(searchOptions);

	 	this.searchOptions=searchOptions;
	 	loadTours(vm);
	 }
	 function loadSearchOption(vm){
	 	var localStore = ioc.resolve("ILocalStore");
		var searchOptions = localStore.get("tourSearch");
		localStore.remove("tourSearch");
		vm.searchOptions=searchOptions||{};
	 }
});