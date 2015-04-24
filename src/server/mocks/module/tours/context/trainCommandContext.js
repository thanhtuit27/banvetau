define([
	"server/module/common/models/queryable/iqueryable",
	"server/module/common/models/http/responseMessage",
	"server/mocks/module/tours/data/trains"
	],function(iqueryableFactory, responseMessageFactory, trainDataItems){
	var queryContext={
		getById: getById
	};
	queryContext = System.inheritInstance(iqueryableFactory.create(), queryContext);
	return queryContext;

	function getById(id){
		var def=GLOBAL.ioc.resolve("Promise").create();
		var responseMessage = responseMessageFactory.create();
		responseMessage.setData(trainDataItems.firstOrDefault(function(item){
			return item.id==id;
		}));
		GLOBAL.logger.info("Inside trainQueryContext'sgetById:{0}", responseMessage.toJson().data);
		def.resolve(responseMessage);
		return def;
	}
});