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
		var def=GLOBAL.ioc.resolve("Promise").create();
		var responseMessage = responseMessageFactory.create();
		tourRepository.getTours(options).then(function(response){
			def.resolve(response);
		});
		return def;
	}
});