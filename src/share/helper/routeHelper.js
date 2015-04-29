define(function(){
	

	var helper={
		registerRoute:registerRoute
	};
	return helper;

	function registerRoute(router, route){
		var method = String.isNullOrWhiteSpace(route.method)?"get":route.method;

		var logger=GLOBAL.ioc.resolve("ILogger");
		logger.info("'{0}' was registerd with '{1}'", route.url, method);
		
		router[method](route.url,function(req, res){
			setDefaultParams(req);
			requirejs([route.handler],function(handler){
				var action=getAction(handler, req, method);
				action(req,res);
			});
		});


		function setDefaultParams(request){
			var segments=request.path.split("/");
			if(segments.length>0){
				request.params.action=segments[1];
			}
		}
		function getAction(handler, request, method){
			var action=String.isNullOrWhiteSpace(request.params.action)?"": request.params.action;
			var actionWithMethod=String.format("{0}{1}", method, action.capitalize());
			if(typeof handler[actionWithMethod]==="function"){
				return handler[actionWithMethod];
			}

			if(typeof handler[action]==="function"){
				return handler[action];
			}

			if(typeof handler[method]==="function"){
				return handler[method];
			}

			throw String.format("'{0}' or '{1}' actions were not supported", action, actionWithMethod);
		}
	}

});