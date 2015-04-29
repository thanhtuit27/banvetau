define([
	"server/module/common/context/mongodb/baseContext",
	"server/module/common/models/http/responseMessage",
	"share/model/enums",
	"server/module/tours/schema/mssql/tourMasterInfo",
	"server/module/tours/aggregate/tour",
	"share/helper/functionHelper",
	"server/module/common/context/mssql/baseContext",
	"server/module/common/context/unitOfWork",
	"server/module/common/event/eventManager"
	],function(dbContextFactory, responseMessageFactory, enums, tourSchemaFactory, tourAggregateFactory, 
		functionHelper, mssqlContextFactory, unitOfWorkFactory, eventManager){
	var respository={
		getTours:getTours,
		create:create,
		save: save
	};
	return respository;

	function save(tourAggreate){
		GLOBAL.logger.info("tourRepository.save:{0}", tourAggreate);
		var def=GLOBAL.ioc.resolve("Promise").create();
		var tourDto = tourSchemaFactory.create(tourAggreate);
		var schemaOptions={name:"Tour", type:"Command"};
		var unitOfWork = unitOfWorkFactory.create(schemaOptions);

		unitOfWork.context.Tours.add(tourDto).then(function(responseMessage){
			GLOBAL.logger.info("Tour was added into repository:{0}", responseMessage);
			unitOfWork.commit().then(function(){
				GLOBAL.logger.info("unitOfWork.commit in tourRepository.save ...");
				responseMessage.setData({id:tourDto.id});
				def.resolve(responseMessage);
				eventManager.publish({name:"TourCreated", data: tourAggreate.toJson()});
			});

		});
	
		return def;
	}
	function create(createCommand){

		GLOBAL.logger.info("tourReposotory.Create:{0}", createCommand);
		var schemaOptions={name:"Tour", type:"Command"};
		var context = mssqlContextFactory.create(schemaOptions);
		var def=GLOBAL.ioc.resolve("Promise").create();
		var serializedCallParams=[
			{name:"trainInfo", params:createCommand.trainInfo.id, method: context.Trains.getById},
			{name:"locationFrom", params:createCommand.locationFrom.id, method: context.Locations.getById},
			{name:"locationTo", params:createCommand.locationTo.id, method: context.Locations.getById},
			{name:"segments", params:createCommand.trainInfo.id, method: context.Segments.getByTrainId},
		];

		functionHelper.makeSerializeCall(serializedCallParams).then(function(result){
			GLOBAL.logger.info("makeSerializeCall result: {0}", result);
			trainInfo = result.trainInfo;
			locationFrom = System.extend(createCommand.locationFrom,result.locationFrom);
			locationTo = System.extend(createCommand.locationTo,result.locationTo);
			segments = result.segments;

			var tourAggreate = tourAggregateFactory.create(createCommand.baseInfo, locationFrom, locationTo, trainInfo, segments);
			GLOBAL.logger.info("tourAggreate.create.functionHelper.makeSerializeCall:{0}", tourAggreate);
			var responseMessage = responseMessageFactory.create();
			responseMessage.setData(tourAggreate);
			def.resolve(responseMessage);
		});

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