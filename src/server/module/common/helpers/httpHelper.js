define(function(){
	var helper={
		getParams:getParams
	};
	return helper;
	/*
	the priority is body, query and params.
	It means that if the param occurs in multuple location then
	value on body will override value in query, value in query will override value in params
	*/
	function getParams(request){
		var params = request.params||{};
		params = System.extend(params, request.query);
		params = System.extend(params, request.body);
		delete params["action"];
		return params;
	}
});