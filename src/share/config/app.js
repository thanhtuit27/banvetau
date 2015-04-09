/*
this file containt the configuration for both client and server side
*/
define([
	"server/config/modules",
	"share/model/enums",
	],function(modules, enums){
	var appConfig={
			localeUrl:"share/locale",
			mode:enums.appMode.debug,
			client:{
				//relative folder that content client code
				alias:'client',
				//startpage of client
				defaultUrl:'index.html',
				port:3000
			},
			server:{
				modules:modules,
				connections:{
					defaultConnectionForQuery:"mongodb://localhost:27017/db"
				}
			},
			//true for caching the content in the app
			cache:true
	};
	return appConfig;
});