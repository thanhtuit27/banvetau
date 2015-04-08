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
		var schema="Tour";
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
		var query = queryBuilder.createQuery(options);
		var context= dbContextFactory.create(schema);
		context.Tours.where(query).then(function(response){
			queryResponseMessage.setData(response.toJson());
			console.log("in tourRepository.getTours.then", queryResponseMessage);

			def.resolve(queryResponseMessage);
		});

		return def;
	}
	function getToursValidation(options){
		console.log("validation options ne:", options);
		var errors=[];
		if(options && String.isNullOrWhiteSpace(options.from)){
			errors.push({key:"From_Empty", message:"From can not be empty"});
		}

		if(options && String.isNullOrWhiteSpace(options.to)){
			errors.push({key:"To_Empty", message:"To can not be empty"});
		}
		return errors;
	}
});