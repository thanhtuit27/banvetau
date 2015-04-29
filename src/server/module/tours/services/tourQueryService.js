define([
	"server/module/tours/repositories/tourRepository"
	],function(tourRepository){
	var service={
		getTours:getTours
	};
	return service;
	function getTours(options){
		var def=GLOBAL.ioc.resolve("Promise").create();
		tourRepository.getTours(options).then(function(response){
			def.resolve(response);
		});
		return def;
	}
});