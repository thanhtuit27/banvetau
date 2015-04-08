
GLOBAL.baseDir=__dirname;
require('./share/jsextension');
var cluster = require('cluster');
if (cluster.isMaster) {

    // Count the machine's CPUs
    var cpuCount = require('os').cpus().length;

    // Create a worker for each CPU
    for (var i = 0; i < cpuCount; i += 1) {
        cluster.fork();
    }
}else{

	GLOBAL.promise=require("node-promise");

	var express=require('express');
	GLOBAL.router=express.Router();

	var requirejs=require('requirejs');
	var consolidate=require("consolidate");
	var app=new express();

	requirejs([
		'./share/helper/configurationHelper',
		"./share/helper/appHelper"
	], function(configHelper, appHelper){
		var ioc = configHelper.configIoC();
		GLOBAL.ioc = ioc;

		var logger=ioc.resolve("ILogger");
		logger.info("Configuring the app ...");
		appHelper.config(app);
		logger.info("The app is ready for use");
	});
}


