define(function(){
	var options = null;
	var fileStream=null;
	var logger = {
        info: info,
        error: error,
        warn: warn,
        injectConstructor:injectConstructor
    };
    return logger;

    function injectConstructor(params){

    	options = params;
    	fileStream = require('fs');
    	console.info("File logger's injectConstructor, params:", params);
    }
     function info() {
        var strToWrite = convertToString(arguments);
        strToWrite = String.format("Info:{0}\n",strToWrite);
        writeStringToFileStream(strToWrite);
    }

    function error() {
        var strToWrite = convertToString(arguments);
        strToWrite = String.format("Error:{0}\n",strToWrite);
        writeStringToFileStream(strToWrite);
    }

    function warn() {
        var strToWrite = convertToString(arguments);
        strToWrite = String.format("Warn:{0}\n",strToWrite);
        writeStringToFileStream(strToWrite);
    }

    function writeStringToFileStream(strToWrite){
    	fileStream.appendFile(options.filePath, strToWrite, function(err) {
    		if(err){
        		console.error(err);
        	}
        });
    }

    function convertToString(args){
        var str=String.format(args);
        return String.format('{0}: {1}', new Date().format("yyyy-mm-dd HH:MM:ss"), str);
    }
});