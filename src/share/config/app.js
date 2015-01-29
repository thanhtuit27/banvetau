/*
this file containt the configuration for both client and server side
*/
define(function(){
	var appConfig={
			client:{
				//relative folder that content client code
				alias:'client',
				//startpage of client
				defaultUrl:'index.html',
				port:3000
			},
			//true for caching the content in the app
			cache:true
	};
	return appConfig;
});