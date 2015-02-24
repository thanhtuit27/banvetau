define([
	"server/module/common/models/http/responseMessage"
	],function(responseMessageFactory){
	var service={
		getTours:getTours
	};
	return service;
	function getTours(){
		var def=GLOBAL.ioc.resolve("Promise").create();
		var logger=GLOBAL.ioc.resolve("ILogger");
		var responseMessage = responseMessageFactory.create();
		
		responseMessage.setData([
			{id:1, name:"route 1"},
			{id:2, name:"route 2"},
			{id:3, name:"route 3"},
			{id:4, name:"route 4"},
		]);
		setTimeout(function(){
			def.resolve(responseMessage);
		}, 1000)
		return def;
	}
});