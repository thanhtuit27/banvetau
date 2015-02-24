define(function(){
	var helper={
		addParams:addParams
	};
	return helper;
	function addParams(url, params){
		for(var paramName in params){
			var paramValue=params[paramName];
			url = addParam(url, paramName,paramValue);
		}
		return url;
	}

	function addParam(url, name, value){
		var paramSeperator="?";
		if(url.isExist("?")){
			paramSeperator="&";
		}
		url=String.format("{0}{1}{2}={3}", url, paramSeperator, name, value);
		return url;
	}
});