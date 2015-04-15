define([
	"server/module/common/models/queryable/iqueryable",
	"server/module/common/db/mssql/connection",
	"server/module/common/models/http/responseMessage",
	"share/model/enums",
	],function(iqueryableFactory, connectionFactory, responseMessageFactory, enums){
	var context={
		where: where
	};
	context = System.inheritInstance(iqueryableFactory.create(), context);
	return context;

	function add(tourItem){
		var def=GLOBAL.ioc.resolve("Promise").create();
		GLOBAL.logger.info("add of tourCommandContext, dataItem:{0}", tourItem);
		var addCommand =  commandBuilderFactory.create(tourItem);
		
		def.resolve();
		return def;
	}
});