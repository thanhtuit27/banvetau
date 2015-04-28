define([
	"server/module/common/context/mongodb/baseContext",
	],function(dbContextFactory){
	var repository={
		save:save
	};
	return repository;

	function save(commandObj){
		var def=GLOBAL.ioc.resolve("Promise").create();
		GLOBAL.logger.info("Inside commandQueueRepository.save, data:{0}", commandObj);
		var schemaOptions={name:"QueueCommand", type:"Query"};
		var context= dbContextFactory.create(schemaOptions);
		context.QueueCommands.save(commandObj).then(function(response){
			def.resolve(response);
		});
		return def;
	}
});