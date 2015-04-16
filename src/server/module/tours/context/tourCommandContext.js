define([
	"server/module/common/models/queryable/iqueryable",
	"server/module/common/context/mssql/baseContext",
	"server/module/common/context/mssql/commandBuilder",
	"server/module/common/models/http/responseMessage",
	"share/model/enums",
	],function(iqueryableFactory, baseContextFactory, commandBuilderFactory, responseMessageFactory, enums){
	var context={
		add: add
	};
	context = System.inheritInstance(iqueryableFactory.create(), context);
	context = System.inheritInstance(baseContextFactory.create(), context);
	return context;

	function add(tourItem){
		var def=GLOBAL.ioc.resolve("Promise").create();
		GLOBAL.logger.info("add of tourCommandContext, dataItem:{0}", tourItem);
		var addCommand =  commandBuilderFactory.createAddCommand(tourItem);
		this.excute(addCommand).then(function(responseMessage){
			def.resolve(responseMessage);
		});
		return def;
	}
});