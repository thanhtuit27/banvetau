define(["views/module/startup/config/module"], function(moduleConfig){
	var module={
		start:start
	};
	return module;

	function start(app, request, response){
		configModule(app, moduleConfig);
		response.send("inside startup module");
	}

	function configModule(app, moduleConfig){
		var routes=moduleConfig.routes;
		console.log(routes);
		routes.forEach(function(routeItem){
			console.log(String.format("Register url:'{0}'", routeItem.url));
			app.get(routeItem.url,function(req, res){
				app.render(routeItem.view, routeItem.controller, function(error, html){
					console.log(String.format("render html:{0}, error:{1}", html, error));
					res.send(html);
				})
			});
		});

	}
});