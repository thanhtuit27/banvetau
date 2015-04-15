define([
	"server/module/common/builder/queryBuilder",
	"server/module/common/context/dbContext",
	"server/module/common/models/http/responseMessage",
	"share/model/enums",
	"server/module/tours/schema/mssql/tourMasterInfo"
	],function(queryBuilder, dbContextFactory, responseMessageFactory, enums, tourSchemaFactory){
	var respository={
		getTours:getTours,
		createTour:createTour
	};
	return respository;

	function createTour(tourAggreate,context){
		var def=GLOBAL.ioc.resolve("Promise").create();
		
		var tourInfo = tourSchemaFactory.create(tourAggreate);
		GLOBAL.logger.info("Tourinfo master info:{0}", tourInfo);
		context.Tours.add(tourInfo).then(function(responseMessage){
			def.resolve(responseMessage);
		});

		GLOBAL.logger.info("createTour in tourRepository");
		return def;
	}
	function getTours(options){
		console.log("in tourRepository.getTours");
		var schemaOptions={name:"Tour", type:"Query"};
		var def=GLOBAL.ioc.resolve("Promise").create();
		var logger=GLOBAL.ioc.resolve("ILogger");
		var queryResponseMessage = responseMessageFactory.create();
		var errors=getToursValidation(options);
		
		if(errors.length>0){
			queryResponseMessage.addErrors(errors);
			queryResponseMessage.setStatus(enums.http.httpStatus.expectationFailed);
			def.resolve(queryResponseMessage);
			return def;
		}
		
		var context= dbContextFactory.create(schemaOptions);
		context.Tours.where(options).then(function(response){
			def.resolve(response);
		});

		return def;
	}
	function getToursValidation(options){
		var errors=[];
		return errors;
	}
});