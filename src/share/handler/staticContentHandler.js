define(function(){
	var handler={
		name:"staticContentHandler",
		description:"handle stratic files, such as: html, js, ...",
		config: config
	};
	return handler;
	function config(app){
		var logger=GLOBAL.ioc.resolve("ILogger");

		app.get('*.js', function (req, res) {
			downloadFile(req, res);
	  	});
	  	app.get('*.html', function (req, res) {
			downloadFile(req, res);
	  	});
	  	app.get('*.css', function (req, res) {
			downloadFile(req, res);
	  	});
	  	app.get('*.js.map', function (req, res) {
			downloadFile(req, res);
	  	});
	  	app.get('*.png', function (req, res) {
			downloadFile(req, res);
	  	});

	  	function downloadFile(req, res){
	  		var fileName=req.originalUrl;
			var options = {
				root: GLOBAL.baseDir,
			    dotfiles: 'deny',
			    headers: {
			        'x-timestamp': Date.now(),
			        'x-sent': true
				}
		  	};
		  	res.sendFile(fileName, options, function (err) {
			    if (err) {
			    	logger.error(err);
			    	res.status(err.status).end();
			    }
			    else {
		    		logger.info("'{0}' file was sent", fileName);
			    }
		  	});
	  	}

	}
});