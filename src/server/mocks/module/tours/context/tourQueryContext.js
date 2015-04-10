define([
	"server/module/common/models/queryable/iqueryable",
	"server/module/common/models/http/responseMessage",
	"server/mocks/module/tours/data/tours"
	],function(iqueryableFactory, responseMessageFactory, tourDataItems){
	var queryContext={
		where: where
	};
	queryContext = System.inheritInstance(iqueryableFactory.create(), queryContext);
	return queryContext;

	function where(options){
		var def=GLOBAL.ioc.resolve("Promise").create();
		var responseMessage = responseMessageFactory.create();
		responseMessage.setData(tourDataItems);
		def.resolve(responseMessage);
		return def;
	}
});