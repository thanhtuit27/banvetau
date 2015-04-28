define([
	"server/module/common/models/queryable/iqueryable",
	"server/module/common/models/http/responseMessage",
	"server/mocks/module/tours/data/tours"
	],function(iqueryableFactory, responseMessageFactory, tourDataItems){
	var queryContext={
		where: where,
		add:add
	};
	queryContext = System.inheritInstance(iqueryableFactory.create(), queryContext);
	return queryContext;


	function add(tour){
		GLOBAL.logger.info("Tour inform to be added:{0}", tour);
		var def = GLOBAL.ioc.resolve("Promise").create();
		tourDataItems.push(tour);
		GLOBAL.logger.info("Data after create new tour:{0}", tourDataItems);
		var responseMessage = responseMessageFactory.create();
		def.resolve(responseMessage);
		return def;
	}
	function where(options){
		var def=GLOBAL.ioc.resolve("Promise").create();
		var responseMessage = responseMessageFactory.create();
		responseMessage.setData(tourDataItems);
		def.resolve(responseMessage);
		return def;
	}
});