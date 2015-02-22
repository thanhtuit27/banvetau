requirejs.config({baseUrl:""});

var ioc=null;
define([
	'client/module/common/helper/moduleHelper',
	'share/helper/configurationHelper',
	'share/model/enums',
	'client/config/app',
	'client/config/ioc',
	'client/module/common/index'
],function(moduleHelper, configHelper, enums, appConfig){
	ioc = configHelper.configIoC({type:enums.applicationType.client});
	
	var logger=ioc.resolve("ILogger");
	logger.info("Module configuration ...");
	var currentModule=moduleHelper.getCurrentModule();
	var moduleName = String.isNullOrWhiteSpace(currentModule)?appConfig.defaultModule:currentModule;
	var defaultModule=String.format("client/module/{0}/index", moduleName);

	require([defaultModule],function(module){
		module.init();
		angular.element(document).ready(function () {
		    angular.bootstrap(document, [moduleName]);
		    logger.info("'{0}' module was bootstrapped", moduleName);
		});
	});
});