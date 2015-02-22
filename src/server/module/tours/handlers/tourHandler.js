define([
	"server/module/common/models/http/responseMessage"
	], function(responseMessageFactory){
	var handler={
		get:get
	};
	return handler;
	function get(req, res){
		var responseMessage = responseMessageFactory.create();
		responseMessage.setData([
			{id:1, name:"route 1"},
			{id:2, name:"route 2"},
			{id:3, name:"route 3"},
			{id:4, name:"route 4"},
		]);
		var jsonData=responseMessage.toJson();

		var logger=GLOBAL.ioc.resolve("ILogger");
		logger.info("getTours was processed");
		logger.info("json data:'{0}'", jsonData);
		res.json(jsonData);
	}
});