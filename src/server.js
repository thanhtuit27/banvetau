GLOBAL.baseDir=__dirname;
require('./share/jsextension');
GLOBAL.promise=require("node-promise");

var express=require('express');
var requirejs=require('requirejs');
var consolidate=require("consolidate");
var app=new express();

GLOBAL.router=express.Router();

requirejs(["./share/helper/appHelper"], function(appHelper){
	appHelper.config(app);	
});

/*app.get('/module/:moduleName',function(req, res){
	//console.log(String.format("Module name ne :'{0}'",req.params));
	var params=req.params;
	requirejs(["./views/config/app.js","./share/service/moduleservice"], function(appConfig, moduleService){
		moduleService.resolve(appConfig, req.params).then(function(moduleInstance){
			moduleInstance.start(app, req, res);
		});


	});
});*/


