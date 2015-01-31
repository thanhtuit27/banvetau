define(function () {
    "use strict";

    var logger = {
            info: info,
            error: error,
            warn: warn
        };
    /*if (config.runMode == enums.appRunMode.debug)
    {
        logger = {
            info: info,
            error: error,
            warn: warn
        };
    }*/
    return logger;

    function info() {
        var strToWrite = convertToString(arguments);
        console.info(strToWrite);
    }

    function error() {
        var strToWrite = convertToString(arguments);
        console.error(strToWrite);
    }

    function warn() {
        var strToWrite = convertToString(arguments);
        console.warn(strToWrite);
    }

    function convertToString(args){
        var str=String.format(args);
        return String.format('{0}: {1}', new Date().format("yyyy-mm-dd HH:MM:ss"), str);
    }
});
