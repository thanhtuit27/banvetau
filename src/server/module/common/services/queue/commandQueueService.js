define([
		"server/module/common/repository/queue/commandQueueRepository"
	],function(commandQueueRepository){
	var service={
		save:save
	};
	return service;

	function save(commandObj){
		return commandQueueRepository.save(commandObj);
	}
});