define(function(){
	var handler={
		name:"staticContentHandler",
		description:"handle stratic files, such as: html, js, ...",
		config: config
	};
	return handler;
	function config(app){
		app.get('*.js', function (req, res) {
			var fileName=req.originalUrl;
			console.log(fileName);
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
			      console.log(err);
			      res.status(err.status).end();
			    }
			    else {
			      console.log('Sent:', fileName);
			    }
		  	});
	  	});
	}
});