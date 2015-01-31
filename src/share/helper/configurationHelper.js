define(['share/helper/iocHelper', "share/config/ioc"],function(iocHelper){
	GLOBAL.ioc=iocHelper;

	var helper={
		config:config
	};
	return helper;

	function config(){
		configIOC();
	}

	function configIOC(){
		iocHelper.load("share/config/ioc");
	}
});