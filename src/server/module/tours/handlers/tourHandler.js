define([
	"server/module/tours/services/tourQueryService",
	"server/module/tours/services/tourCommandService",
	"server/module/common/helpers/httpHelper",
	"server/module/common/services/queue/commandQueueService",
	"server/module/common/schema/mongodb/queue/queueCommand"
	], function(tourQueryService, tourCommandService, httpHelper, commandQueueService, queueCommandSchemaFactory){
	var handler={
		get:get,
		post:post

	};
	return handler;
	function post(req, res){
		var logger=GLOBAL.ioc.resolve("ILogger");
		var params = httpHelper.getParams(req);
		logger.info("Request was procesed by '#{0}' pid, params:{1}", process.pid, params);

		
		/*var queueCommand = queueCommandSchemaFactory.create({action:"CREATE_TOUR_COMMAND", data: params});
		commandQueueService.save(queueCommand).then(function(responseMessage){
			res.json(responseMessage.toJson());
		});*/
		//var commandQueueService = GLOBAL.ioc.resolve("IQueueService","Command");
		tourCommandService.createTour(params).then(function(responseMessage){
			res.json(responseMessage.toJson());
		});
	}

	function get(req, res){
		var logger=GLOBAL.ioc.resolve("ILogger");
		logger.info("Request was procesed by '#{0}' pid", process.pid);
		var params = httpHelper.getParams(req);
		tourQueryService.getTours(params).then(function(responseMessage){
			res.json(responseMessage.toJson());	
		});
	}
});
