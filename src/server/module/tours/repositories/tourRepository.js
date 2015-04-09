define([
	"server/module/common/builder/queryBuilder",
	"server/module/common/context/dbContext",
	"server/module/common/models/http/responseMessage",
	"share/model/enums"
	],function(queryBuilder, dbContextFactory, queryResponseMessageFactory, enums){
	var respository={
		getTours:getTours
	};
	return respository;

	function getTours(options){
		console.log("in tourRepository.getTours");
		var schemaOptions={name:"Tour", type:"Query"};
		var def=GLOBAL.ioc.resolve("Promise").create();
		var logger=GLOBAL.ioc.resolve("ILogger");
		var queryResponseMessage = queryResponseMessageFactory.create();
		var errors=getToursValidation(options);
		
		if(errors.length>0){
			queryResponseMessage.addErrors(errors);
			queryResponseMessage.setStatus(enums.http.httpStatus.expectationFailed);
			def.resolve(queryResponseMessage);
			return def;
		}
		
		var context= dbContextFactory.create(schemaOptions);
		context.Tours.where(options).then(function(response){
			queryResponseMessage.setData(response.toJson());
			//console.log("in tourRepository.getTours.then", queryResponseMessage.toJson());
			def.resolve(queryResponseMessage);
		});

		return def;
	}
	function getToursValidation(options){
		var errors=[];
		return errors;
	}
});