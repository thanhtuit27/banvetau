define([
	"server/module/common/models/queryable/iqueryable",
	"server/module/common/models/http/responseMessage",
	"server/mocks/module/tours/data/segments"
	],function(iqueryableFactory, responseMessageFactory, dataItems){
	var queryContext={
		getByTrainId: getByTrainId
	};
	queryContext = System.inheritInstance(iqueryableFactory.create(), queryContext);
	return queryContext;


	function getByTrainId(trainId){
		var def = GLOBAL.ioc.resolve("Promise").create();
		var segments = dataItems.where(function(item){
			return item.trainId == trainId;
		});
		var responseMessage = responseMessageFactory.create();
		responseMessage.setData(segments);
		def.resolve(responseMessage);
		return def;
	}
});