define([
	"server/module/common/models/queryable/iqueryable",
	"server/module/common/db/mongodb/connection",
	"server/module/common/db/mongodb/builder",
	"server/module/tours/schema/mongodb/tours",
	"server/module/common/models/http/responseMessage",
	"share/model/enums",
	],function(iqueryableFactory, connectionFactory, builder, toursSchema, responseMessageFactory, enums){
	var queryContext={
		where: where
	};
	queryContext = System.inheritInstance(iqueryableFactory.create(), queryContext);
	return queryContext;

	function where(options){
		var def=GLOBAL.ioc.resolve("Promise").create();
		var query = builder.getQueryParams(options);
		var model = builder.getModel(toursSchema);
		model.find(query, function(errors, items){
			var responseMessage = responseMessageFactory.create();
			handleResponse(items, errors, responseMessage);
			def.resolve(responseMessage);
		});
		return def;
	}
	function handleResponse(items, errors, responseMessage){
		if(errors && errors.length>0){
			responseMessage.addErrors(errors);
			responseMessage.setStatus(enums.http.httpStatus.internalServerError);
			return;
		}
		responseMessage.setData(items);
	}
});
