define(function(){
	var factory = {
		create: create
	};
	return factory;

	function create(contextParam){
		GLOBAL.logger.info("create in UnitOfWork, context:{0}", contextParam);
		return new UnitOfWork(contextParam);
		function UnitOfWork(context){
			var self =  this;
			self.context = context;
			self.commit = commit;

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