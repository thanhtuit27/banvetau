define([
	"client/module/common/helper/urlHelper"
	],function(urlHelper){
	var dataService = {
		get:get
	};
	return dataService;
	function get(url, options){
		var def=new $.Deferred();
		var url= urlHelper.addParams(url,options);

		$.get(url, function(response){
			if(!response || (response.errors && response.errors.length>0)){
				handlingError(response, url, options);
				def.reject();
			}
			def.resolve(response.data);
		}).fail(function(response){
			handlingError(response, url, options);
		});
		return def;
	}


	function handlingError(response, url, options){
		var logger=ioc.resolve("ILogger");
		if(!response || !response.errors || response.errors.length<=0){
			logger.error("General exception when calling to '{0}' with '{1}' option", url, options);
			return;
		}
		logger.error("Exception when calling to '{0}' with '{1}' option as below:", url, options);
		response.errors.forEach(function(error){
			logger.error(error);
		});
	}
});