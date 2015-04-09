define([
	"server/module/tours/services/tourQueryService",
	"server/module/common/helpers/httpHelper"
	], function(tourQueryService, httpHelper){
	var handler={
		get:get
	};
	return handler;
	function get(req, res){
		var logger=GLOBAL.ioc.resolve("ILogger");
		logger.info("Request was procesed by '#{0}' pid", process.pid);
		var params = httpHelper.getParams(req);
		//logger.info("Params:{0}, query:{1}", params, req.query);
		tourQueryService.getTours(params).then(function(responseMessage){
			res.json(responseMessage.toJson());	
		});
	}
});
