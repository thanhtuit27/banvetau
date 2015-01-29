define(['share/config/app'],function(appConfig){
	var handler={
		name:"clientHandler",
		description:"handle request for client app",
		config: config
	};
	return handler;

	function config(app){
		app.get('/',function(req, res){
			app.render(appConfig.client.defaultUrl,function(error, html){
				res.send(html);
			})
		});
	}
});