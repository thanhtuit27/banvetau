define([
	'server/module/common/context/unitOfWork',
	'server/module/common/models/queryable/iqueryable'
	],function(unitOfWorkFactory, iqueryableFactory){
	
	var context={
		create: create,
		createUnitOfWork: createUnitOfWork
	};
	return context;
	function createUnitOfWork(schemaOptions){
		GLOBAL.logger.info("createUnitOfWork in dbContext, schemaOptions:{0}", schemaOptions);
		var context = create(schemaOptions);
		var unitOfWork = unitOfWorkFactory.create(context);
		return unitOfWork;
	}
/*
schemaOptions:{name, type}
*/
	function create(schemaOptions){
		if(!schemaOptions){ throw "Schema can not be empty.";}
		schemaOptions.name=schemaOptions.name.toPlural();
		return new Context(schemaOptions);
		function Context(schemaOptions){
			var self=this;
			/*Consider if this should be explicit included by requirejs*/
			var contextResolver = GLOBAL.ioc.resolve("IContextResolver");
			self[schemaOptions.name]= contextResolver.resolve(schemaOptions);
			self.commit = commit;
			return self;

			function commit(){
				var def = GLOBAL.ioc.resolve("Promise").create();
				GLOBAL.logger.info("commit of dbContext");
				//will check to see how to commit each context
				//temporary ok for now
				def.resolve();
				return def;
			}
		}
	}


	
});