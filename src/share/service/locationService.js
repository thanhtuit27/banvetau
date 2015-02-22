define([
	"share/config/app",
	"share/model/enums"
],function(appConfig, enums){
	var service={
		getResourceFileUrl:getResourceFileUrl
	};
	return service;

	function getResourceFileUrl(resourceKey, languageCode){
		var url="";
		if(appConfig.mode===enums.appMode.debug){
			var keys=resourceKey.split(".");
			url=String.format("{0}/{1}/{2}/{3}", appConfig.localeUrl, languageCode, keys[0], keys[1]);
		}
		if(appConfig.mode===enums.appMode.release){
			url=resourceKey.split(".")[0];
			url=String.format("{0}/{1}/{2}", appConfig.localeUrl, languageCode, url);
		}
		return url;
	}
});