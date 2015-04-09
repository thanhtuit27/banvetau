
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
	GLOBAL.mongodb = require('mongoose');
	var app=new express();

	requirejs([
		'./share/helper/configurationHelper',
		"./share/helper/appHelper",
		'share/model/enums'
	], function(configHelper, appHelper, enums){
		var ioc = configHelper.configIoC({type:enums.applicationType.server});
		GLOBAL.ioc = ioc;
		GLOBAL.logger = ioc.resolve("ILogger");


		var logger=ioc.resolve("ILogger");
		logger.info("Configuring the app ...");
		appHelper.config(app);
		logger.info("The app is ready for use");
	});
}


