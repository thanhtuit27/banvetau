define([
	"server/module/common/context/dbContext",
	"server/module/common/context/mssql/mssqlConnection",
	"server/module/common/models/http/responseMessage"
	],function(dbContextFactory, mssqlConnection,responseMessageFactory){
		var context = {
			create: create,
			
		};
		return context;
		function create(schemaOptions){
			GLOBAL.logger.info("creating new instance of MSSQLBaseContext,schemaOptions:{0}", schemaOptions);
			return MSSQLBaseContext();
			function MSSQLBaseContext(){
				GLOBAL.logger.info("new instance of MSSQLBaseContext was created,schemaOptions:{0}", schemaOptions);
				var self = {
					excute: excute,
					commit: commit
				};
				//var dbContext = requirejs("server/module/common/context/dbContext");
				self = System.inheritInstance(dbContextFactory.create(), self);
				if(schemaOptions){
					GLOBAL.logger.info("MSSQLBaseContext:Resolving content resolver");
					var contextResolver = GLOBAL.ioc.resolve("IContextResolver");
					schemaOptions.name=schemaOptions.name.toPlural();
					GLOBAL.logger.info("MSSQLBaseContext:contextResolver:{0}, options:{1}", contextResolver, schemaOptions);
					self.addContext(schemaOptions.name, contextResolver.resolve(schemaOptions));
				}
				return self;
				/*if(startNewTransaction && startNewTransaction===true){
					mssqlConnection.createTransaction();
				}*/

				function commit(){
					GLOBAL.logger.info("Inside commit of mssqlBaseContext");
					var def=GLOBAL.ioc.resolve("Promise").create();
					var responseMessage = responseMessageFactory.create();
					mssqlConnection.getTransaction().then(function(transaction){
						transaction.commit(function(errors){
							GLOBAL.logger.info("Commit current transaction, Erros:{0}", errors);
							def.resolve(responseMessage);		
						});
					});
					
					return def;
				}
				function excute(command){
					GLOBAL.logger.info("mssqlBaseContext execute, command:{0}, command as text:{1}", command,command.asCommandText());
					var def=GLOBAL.ioc.resolve("Promise").create();
					mssqlConnection.newTransaction().then(function(transaction){
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