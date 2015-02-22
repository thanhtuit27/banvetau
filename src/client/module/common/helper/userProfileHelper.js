define([
	"client/config/app"
	],function(appConfig){
	var helper={
		getLanguage:getLanguage
	};
	return helper;
	function getLanguage(){
		var localstore=ioc.resolve("ILocalStore");
		var userProfile = localstore.get("userProfile");
		if(String.isNullOrWhiteSpace(userProfile.languageCode)){
			return appConfig.languageCode;
		}
		return userProfile.languageCode;
	}
});