define([
	"server/module/common/context/mssql/baseContext",
	//"server/module/common/context/dbContext",
	],function(dbContextFactory){
	var factory = {
		create: create
	};
	return factory;

	function create(schemaOptions){
		GLOBAL.logger.info("create in UnitOfWork, schema:{0}", schemaOptions);
		return UnitOfWork(schemaOptions);

		function UnitOfWork(schemaOptions){
			var self =  {};
			GLOBAL.logger.info("Construction of UnitOfWork, schemaOptions:{0}", schemaOptions);
			self.context = dbContextFactory.create(schemaOptions);
			//GLOBAL.logger.info("Construction of UnitOfWork, Context:{0}", self.context);
			self.commit = commit;
			//GLOBAL.logger.info("Construction of UnitOfWork, context:{0}", self.context);
			return self;

			function commit(){
				GLOBAL.logger.info("commit in UnitOfWork");
				var def = GLOBAL.ioc.resolve("Promise").create();
				if(self.context && self.context.commit){
					self.context.commit().then(function(responseMessage){
						def.resolve(responseMessage);	
					});
				}
				return def;
			}
		}
	}
});