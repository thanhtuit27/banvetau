define([
	//'server/module/common/context/unitOfWork',
	'server/module/common/models/queryable/iqueryable'
	],function(iqueryableFactory){
	
	var context={
		create: create
	};
	return context;
	/*function createUnitOfWork(schemaOptions){
		GLOBAL.logger.info("createUnitOfWork in dbContext, schemaOptions:{0}", schemaOptions);
		var context = create(schemaOptions);
		var unitOfWork = unitOfWorkFactory.create(context);
		return unitOfWork;
	}*/
/*
schemaOptions:{name, type}
*/
	function create(){
		//if(!schemaOptions){ throw "Schema can not be empty.";}
		//schemaOptions.name=schemaOptions.name.toPlural();
		return Context();
		function Context(){
			var self={};
			self = System.inheritInstance(iqueryableFactory.create(), self);

			//self.transaction=null;
			self.commit = commit;
			self.addContext = addContext;
			/*Consider if this should be explicit included by requirejs*/
			//var contextResolver = GLOBAL.ioc.resolve("IContextResolver");
			//add(schemaOptions.name, contextResolver.resolve(schemaOptions));
			//self[schemaOptions.name]= contextResolver.resolve(schemaOptions);
			/*if(isCreateTransaction && isCreateTransaction===true){
				self.transaction = self[schemaOptions.name].createTransaction();
			}*/
			return self;
			function addContext(name, context){

				context=context||{};
				this[name] = context;
				this[name].rootContext = this;
				GLOBAL.logger.info("Add '{0}' context into rootcontext, {1}", name, context);
			}

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