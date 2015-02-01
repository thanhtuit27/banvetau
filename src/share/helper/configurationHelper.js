define([
	'share/helper/iocHelper', 
	'share/model/enums',
	"share/config/ioc"
],function(iocHelper, enums){
	var helper={
		config:config,
		configIoC:configIoC
	};
	return helper;

	function config(){
		configIoC();
	}

	function configIoCForClient(ioc){
		ioc.load("client/config/ioc");
	}

	function configIoCForServer(ioc){
		ioc.load("server/config/ioc");
	}

	function configIoC(options){
		var ioc= iocHelper.create();
		options=options||{};
		
		ioc.load("share/config/ioc");
		if(options.type==enums.applicationType.server){
			configIoCForServer(ioc);
		}
		if(options.type==enums.applicationType.client){
			configIoCForClient(ioc);
		}
		return ioc;
	}
});