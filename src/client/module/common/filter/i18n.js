define([
	"share/service/i18nService",
	"client/module/common/helper/userProfileHelper"
	],function(i18nService, userProfileHelper){
	angular.module("common").filter("i18n",function($timeout){
		return doFilterAction;
		function doFilterAction(resourcekey){
			var logger=ioc.resolve("ILogger");
			logger.info("Resource key '{0}'", resourcekey);
			return i18nService.resolve(resourcekey, userProfileHelper.getLanguage());
		}
	});
});