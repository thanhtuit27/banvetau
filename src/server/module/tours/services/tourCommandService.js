define([
	"server/module/common/models/http/responseMessage",
	"server/module/common/context/unitOfWork",
	"server/module/tours/repositories/tourRepository",
	"server/module/tours/aggregate/tour",
	"share/model/enums",
	],function(responseMessageFactory, unitOfWorkFactory, tourRepository, tourAggregateFactory, enums){
	var command={
		createTour: createTour
	};
	return command;

	function createTour(createTourCommand){
		GLOBAL.logger.info("createTour in tourCommanService");
		var def=GLOBAL.ioc.resolve("Promise").create();
		var responseMessage = responseMessageFactory.create();
		var validationErrors = validateCreatingTourParam(createTourCommand);
		if(Array.any(validationErrors)){
			GLOBAL.logger.info("validateCreatingTourParam was failed:{0}", validationErrors);
			responseMessage.addErrors(validationErrors);
			responseMessage.setStatus(enums.http.httpStatus.expectationFailed);
			def.resolve(responseMessage);
			return def;
		}

		var schemaOptions={name:"Tour", type:"Command"};
		
		tourRepository.create(createTourCommand).then(function(responseMessage){
			var tourAggregate = responseMessage.toJson().data;
			GLOBAL.logger.info("tourAggregate:{0}", tourAggregate);
			tourRepository.save(tourAggregate).then(function(saveResponseMessage){
				def.resolve(saveResponseMessage);
			});
		});
		
		return def;
	}

	function validateCreatingTourParam(createTourCommand){
		GLOBAL.logger.info("validateCreatingTourParam in tourCommanService");
		return [];
	}
});