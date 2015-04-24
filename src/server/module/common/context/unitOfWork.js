define([
	"server/module/common/context/mssql/baseContext",
	"server/module/common/context/mssql/mssqlConnection",
	"server/module/common/models/http/responseMessage"
	//"server/module/common/context/dbContext",
	],function(dbContextFactory, mssqlConnection, responseMessageFactory){
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
			self.transaction=null;
			self.commit = commit;
			self.getTransaction=getTransaction;
			self.context = dbContextFactory.create(schemaOptions, self);

			GLOBAL.logger.error("UnitOfWork.constructor was done:{0}", self.context.unitOfWork);
			return self;


			function createNewTransaction(){
				
			}
			function getTransaction(){
				var def = GLOBAL.ioc.resolve("Promise").create();
				if(!self.transaction){
					mssqlConnection.newTransaction().then(function(newTransaction){
						GLOBAL.logger.info("Create transaaction was created for unitofwork...");
						self.transaction = newTransaction;
						def.resolve(self.transaction);
					});
				}
				return def;
			}

			function commit(){
				GLOBAL.logger.info("commit in UnitOfWork");
				var def = GLOBAL.ioc.resolve("Promise").create();
				self.transaction.commit(function(errors){
					GLOBAL.logger.info("Commit current transaction, Erros:{0}", errors);
					var responseMessage = responseMessageFactory.create();
					def.resolve(responseMessage);		
				});
				/*if(self.context && self.context.commit){
					self.context.commit().then(function(responseMessage){
						def.resolve(responseMessage);	
					});
				}*/
				return def;
			}
		}
	}
});