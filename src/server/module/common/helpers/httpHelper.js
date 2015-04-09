define(function(){
	var helper={
		getParams:getParams
	};
	return helper;

	function getParams(request){
		var params = request.params;
		for(var property in request.query){
			params[property] = request.query[property];
		}
		delete params["action"];
		return params;
	}
});