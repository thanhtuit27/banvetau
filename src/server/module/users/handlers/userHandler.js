define(function(){
	var handler={
		getPermissions:getPermissions,
		postPermissions:postPermissions
	};
	return handler;

	function getPermissions(req, res){
		res.send("Inside user handler with getPermission action");
	}
	function postPermissions(req, res){
		res.send("Inside user handler with postPermissions action");
	}
});