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
				unitOfWork:uow,
				commit:commit,
				addContext:addContext,
			};

			self = System.inheritInstance(iqueryableFactory.create(), self);
			return self;

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