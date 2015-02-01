requirejs.config({baseUrl:""});

var ioc=null;
define([
	'share/helper/configurationHelper',
	'share/model/enums',
	'client/config/app',
	'client/config/ioc'
],function(configHelper, enums, appConfig){
	ioc = configHelper.configIoC({type:enums.applicationType.client});
	
	var logger=ioc.resolve("ILogger");
	logger.info("Module configuration ...");
	var moduleName = appConfig.defaultModule;
	var defaultModule=String.format("client/module/{0}/index", moduleName);

	require([defaultModule],function(module){
		module.init();
		angular.element(document).ready(function () {
		    angular.bootstrap(document, [moduleName]);
		    logger.info("'{0}' module was bootstrapped", moduleName);
		});
	});
});