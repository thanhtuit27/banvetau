define([
	"server/module/common/context/dbContext",
	"server/module/common/models/http/responseMessage"
	],function(dbContextFactory, responseMessageFactory){
		var context = {
			create: create,
			
		};
		return context;
		function create(schemaOptions, uow){
			GLOBAL.logger.info("creating new instance of MSSQLBaseContext,schemaOptions:{0}", schemaOptions);
			return MSSQLBaseContext();
			function MSSQLBaseContext(){
				GLOBAL.logger.info("new instance of MSSQLBaseContext was created,schemaOptions:{0}", schemaOptions);
				var self = {
					excute: excute,
				};
				self = System.inheritInstance(dbContextFactory.create(uow), self);
				GLOBAL.logger.error("MSSQLBaseContext.constructor was done:{0}", self.unitOfWork);
				if(schemaOptions){
					GLOBAL.logger.info("MSSQLBaseContext:Resolving content resolver");
					var contextResolver = GLOBAL.ioc.resolve("IContextResolver");
					GLOBAL.logger.info("MSSQLBaseContext:contextResolver:{0}, options:{1}", contextResolver, schemaOptions);
					loadContext(self, schemaOptions);
				}
				return self;

				function loadContext(self, contextOptions){
					contextOptions.name=contextOptions.name.toPlural();
					var context = contextResolver.resolve(contextOptions);
					self.addContext(contextOptions.name, context.instance);
					if(Array.any(context.dependOn)){
						context.dependOn.forEach(function(dependOnItem){
							loadContext(self, dependOnItem);
						});
					}
				}
				/*This will be called from context of ....*/
				function excute(command){
					GLOBAL.logger.info("mssqlBaseContext execute, command:{0}, command as text:{1}", command,command.asCommandText());
					var def=GLOBAL.ioc.resolve("Promise").create();
					GLOBAL.logger.error("MSSQLBaseContext.excute:{0}", this.rootContext.unitOfWork);
					this.rootContext.unitOfWork.getTransaction().then(function(transaction){
						var request = new GLOBAL.db.mssql.Request(transaction);
						GLOBAL.logger.info("Createing new request");
						//need to check errors status of the call
						request.query(command.asCommandText(), function(err, recordset) {
							GLOBAL.logger.info("Result of addTour execution, command:{0}, error:{1}, recordset:{2}", command.asCommandText(), err,  recordset);
							var responseMessage = responseMessageFactory.create();
							def.resolve(responseMessage);
					    });	
					});
					return def;
				}
			}
		}
});