define([
	"server/module/common/models/queryable/iqueryable",
	"server/module/common/context/mssql/baseContext",
	"server/module/common/context/mssql/commandBuilder",
	],function(iqueryableFactory, baseContextFactory, commandBuilderFactory){
	var context={
		add: add
	};
	context = System.inheritInstance(iqueryableFactory.create(), context);
	context = System.inheritInstance(baseContextFactory.create(), context);
	return context;

	function add(tourItem){
		var def=GLOBAL.ioc.resolve("Promise").create();
		GLOBAL.logger.info("add of tourCommandContext, dataItem:{0}", context.rootContext);
		var addCommand =  commandBuilderFactory.createAddCommand(tourItem);
		context.excute(addCommand).then(function(responseMessage){
			def.resolve(responseMessage);
		});
		return def;
	}
});
