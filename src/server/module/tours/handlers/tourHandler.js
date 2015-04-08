define([
	"server/module/tours/services/tourQueryService"
	], function(tourQueryService){
	var handler={
		get:get
	};
	return handler;
	function get(req, res){
		var logger=GLOBAL.ioc.resolve("ILogger");
		logger.info("Request was procesed by '#{0}' pid", process.pid);
		var params = req.params;
		logger.info("Params", req.params);
		tourQueryService.getTours().then(function(responseMessage){
			res.json(responseMessage.toJson());	
		});
	}
});