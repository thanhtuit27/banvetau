define([
	"server/module/common/models/http/responseMessage",
	"server/module/common/context/dbContext",
	"server/module/tours/repositories/tourRepository",
	"server/module/tours/aggregate/tour",
	"share/model/enums",
	],function(responseMessageFactory, dbContextFactory, tourRepository, tourAggregateFactory, enums){
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
		var unitOfWork = dbContextFactory.createUnitOfWork(schemaOptions);
			var tourAggregate = tourAggregateFactory.create(
				createTourCommand.baseInfo,
				createTourCommand.locationFrom,
				createTourCommand.locationTo,
				createTourCommand.trainInfo
			);
			//consider if responseMessage should come from commit method
			tourRepository.createTour(tourAggregate, unitOfWork.context).then(function(responseMessage){
				unitOfWork.commit().then(function(){
					def.resolve(responseMessage);
				});
			});
		return def;
	}

	function validateCreatingTourParam(createTourCommand){
		GLOBAL.logger.info("validateCreatingTourParam in tourCommanService");
		return [];
	}
});