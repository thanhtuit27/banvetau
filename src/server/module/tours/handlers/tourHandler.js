define([
	"server/module/tours/services/tourQueryService"
	], function(tourQueryService){
	var handler={
		get:get
	};
	return handler;
	function get(req, res){
		var params = "";
		tourQueryService.getTours().then(function(responseMessage){
			var logger=GLOBAL.ioc.resolve("ILogger");
			logger.info("Request was procesed by '#{0}' pid", process.pid);
			res.json(responseMessage.toJson());	
		});
	}
});