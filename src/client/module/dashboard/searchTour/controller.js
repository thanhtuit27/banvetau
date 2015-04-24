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
	 	for(var index=0; index<10; index++){
	 		window.setTimeout(sendRequest(index), index*100);
		 }
	 	/*tourService.getTours(vm.searchOptions).then(function(tours){
	 		vm.tours=tours;
	 	});*/
	 }

	 function sendRequest(index){
	 	var start=new Date();
	 	//console.log(String.format("#index request was started at:{0}", start))
	 	tourService.createTestData().then(function(response){
	 			var end = new Date();
	 			var milisecond = end.getTime()-start.getTime();
		 		console.log(String.format(" was done ...., #{0}, consume:{1} miliseconds, id:{2}", index, milisecond,response.id));
		 	});
	 }
	 function doSearch(searchOptions){
	 	var logger=ioc.resolve("ILogger");
	 	logger.info(searchOptions);

	 	this.searchOptions=searchOptions;
	 	loadTours(this);
	 }
	 function loadSearchOption(vm){
	 	var localStore = ioc.resolve("ILocalStore");
		var searchOptions = localStore.get("tourSearch");
		localStore.remove("tourSearch");
		vm.searchOptions=searchOptions||{};
	 }
});