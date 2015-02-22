define([
	"share/config/app",
	"share/model/enums",
	"share/helper/modelHelper"
	],function(appConfig, enums, modelHelper){
		var service={
			get:get
		};
		return service;
		function get(resourceKey, resourceFileUrl){
			var resourceData=require(resourceFileUrl);
			var keys=resourceKey.split(".");
			
			//remove module name from resource key
			keys.shift();

			if(appConfig.mode===enums.appMode.debug){
				//continue remove name of page from resource key
				keys.shift();
			}
			return getResourceByKey(resourceData,  keys.join("."));
		}
		function getResourceByKey(resourceData, resourceKey){
			return modelHelper.getValueByPath(resourceData, resourceKey);
		}

});