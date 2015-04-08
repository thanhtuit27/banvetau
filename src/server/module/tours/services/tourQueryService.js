define([
	"share/model/enums",
	"server/module/common/models/http/responseMessage",
	"server/module/tours/repositories/tourRepository"
	],function(enums, responseMessageFactory, tourRepository){
	var service={
		getTours:getTours
	};
	return service;
	function getTours(options){
		console.log("in getTours", options);
		var def=GLOBAL.ioc.resolve("Promise").create();
		var logger=GLOBAL.ioc.resolve("ILogger");
		var responseMessage = responseMessageFactory.create();
		//var tourQueryService = GLOBAL.ioc.resolve("IQueryService", "Tour");
		tourRepository.getTours(options).then(function(response){
			console.log("in tourRepository.then");
			/*if(!result.errors && result.errors.length<=0){
				responseMessage.setData(result.data);
				return;
			}

			responseMessage.addErrors(result.errors);
			responseMessage.setStatus(enums.http.httpStatus.internalServerError);
			def.resolve(responseMessage);*/
			def.resolve(response);
		});
		/*tourDataService.getTours(options).then(function(result){
			if(!result.errors && result.errors.length<=0){
				responseMessage.setData(result.data);
				return;
			}

			responseMessage.addErrors(result.errors);
			responseMessage.setStatus(enums.http.httpStatus.internalServerError);
			def.resolve(responseMessage);
		});*/
		/*setTimeout(function(){
			def.resolve(responseMessage);
		}, 1000)*/
		return def;
	}
});