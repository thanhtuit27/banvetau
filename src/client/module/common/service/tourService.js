define([
	"client/module/common/dataService/commonDataService"
	], function(commonDataService){
	var service={
		getTours:getTours,
		createTestData:createTestData
	};
	return service;

	function createTestData(){
		var data={
				"baseInfo":{"name":"HCM - HN"},
				"locationFrom":{"id":"1", "leaveOn":"10/04/2015 04:30"},
				"locationTo":{"id":"2", "arriveOn": "10/04/2015 06:30"},
				"trainInfo":{"id":"1"}
			};
		return commonDataService.post("/api/tours",data);
	}
	function getTours(options){
		return commonDataService.get("/api/tours",options);
	}
});