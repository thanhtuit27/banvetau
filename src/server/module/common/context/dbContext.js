define(['server/module/common/models/queryable/iqueryable'],
	function(iqueryableFactory){
	
	var context={
		create: create
	};
	return context;
/* schemaOptions:{name, type}*/
	function create(uow){
		return Context();
		function Context(){
			var self={
				/*Temporary not to use*/
				//transaction:null,
				unitOfWork:uow,
				//getTransaction:getTransaction,
				commit:commit,
				addContext:addContext,
				//setUnitOfWork:setUnitOfWork
			};

			self = System.inheritInstance(iqueryableFactory.create(), self);
			//self.commit = commit;
			//self.addContext = addContext;
			return self;


			/*function setUnitOfWork(uow){
				GLOBAL.logger.info("dbContext.setUnitOfWork ...{0}", uow);
				self.unitOfWork = uow;
			}*/
			/*function getTransaction(){
				return self.unitOfWork.getTransaction();
			}*/

			function addContext(name, context){
				context=context||{};
				this[name] = context;
				this[name].rootContext = this;
				GLOBAL.logger.info("Add '{0}' context into rootcontext", name);
			}

			function commit(){
				GLOBAL.logger.info("Inside commit of mssqlBaseContext");
				var def=GLOBAL.ioc.resolve("Promise").create();
				self.unitOfWork.getTransaction().then(function(transaction){
					transaction.commit(function(errors){
						GLOBAL.logger.info("Commit current transaction, Erros:{0}", errors);
						var responseMessage = responseMessageFactory.create();
						def.resolve(responseMessage);		
					});
				});
				return def;
			}
		}
	}


	
});