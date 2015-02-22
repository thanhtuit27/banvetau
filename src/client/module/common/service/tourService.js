define([
	"client/module/common/dataService/commonDataService"
	], function(commonDataService){
	var service={
		getTours:getTours
	};
	return service;

	function getTours(options){
		return commonDataService.get("/api/tours",options);
	}
});