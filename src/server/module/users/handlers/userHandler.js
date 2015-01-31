define(function(){
	var handler={
		getPermissions:getPermissions,
		postPermissions:postPermissions
	};
	return handler;

	function getPermissions(req, res){
		var logger=GLOBAL.ioc.resolve("ILogger");
		logger.info("getPermissions was processed");
		res.send("Inside user handler with getPermission action");
	}
	function postPermissions(req, res){
		var logger=GLOBAL.ioc.resolve("ILogger");
		logger.info("postPermissions was processed");
		res.send("Inside user handler with postPermissions action");
	}
});