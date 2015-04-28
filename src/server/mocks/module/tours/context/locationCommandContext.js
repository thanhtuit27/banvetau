define([
	"server/module/common/models/queryable/iqueryable",
	"server/module/common/models/http/responseMessage",
	"server/mocks/module/tours/data/locations"
	],function(iqueryableFactory, responseMessageFactory, locationDataItems){
	var queryContext={
		getById: getById
	};
	queryContext = System.inheritInstance(iqueryableFactory.create(), queryContext);
	return queryContext;

	function getById(locationId){
		var def=GLOBAL.ioc.resolve("Promise").create();
		var responseMessage = responseMessageFactory.create();
		responseMessage.setData(locationDataItems.firstOrDefault(function(item){
			//console.log("inside getById.forEach, locationId:"+ locationId,item);
			return item.id==locationId;
		}));


		GLOBAL.logger.info("Inside locationQueryContext'sgetById:{0}", responseMessage.toJson().data);
		def.resolve(responseMessage);
		return def;
	}
});