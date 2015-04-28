define([
    "share/model/enums"
    ],function (enums) {
    "use strict";
    var appMode=enums.appMode.debug;

    var logger = {
            info: info,
            error: error,
            warn: warn,
            injectConstructor:injectConstructor
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
    function injectConstructor(params){
        appMode=params.appMode;
        console.log("Inside injectConstructor"+ appMode);
    }
    function info() {

        if(appMode==enums.appMode.release){return;}
        var strToWrite = convertToString(arguments);
        console.info(strToWrite);
        console.info();
    }

    function error() {
        if(appMode==enums.appMode.release){return;}
        var strToWrite = convertToString(arguments);
        console.error(strToWrite);
        console.error();
    }

    function warn() {
        if(appMode==enums.appMode.release){return;}
        var strToWrite = convertToString(arguments);
        console.warn(strToWrite);
        console.warn();
    }

    function convertToString(args){
        var str=String.format(args);
        return String.format('{0}: {1}', new Date().format("yyyy-mm-dd HH:MM:ss"), str);
    }
});
