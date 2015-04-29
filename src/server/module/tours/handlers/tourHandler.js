define([
	"server/module/tours/services/tourQueryService",
	"server/module/tours/services/tourCommandService",
	"server/module/common/helpers/httpHelper",
	], function(tourQueryService, tourCommandService, httpHelper){
	var handler={
		get:get,
		post:post
	};
	return handler;
	function post(req, res){
		var params = httpHelper.getParams(req);
		GLOBAL.logger.info("Request was procesed by '#{0}' pid, params:{1}", process.pid, params);
		tourCommandService.createTour(params).then(function(responseMessage){
			res.json(responseMessage.toJson());
		});
	}

	function get(req, res){
		GLOBAL.logger.info("Request was procesed by '#{0}' pid", process.pid);
		var params = httpHelper.getParams(req);
		tourQueryService.getTours(params).then(function(responseMessage){
			res.json(responseMessage.toJson());	
		});
	}
});
