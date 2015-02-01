define([
		"share/helper/logging/defaultlogger"
	], function() {
    var iocItems = [
    	{ type: 'ILogger', name:"Default", instanceOf: "share/helper/logging/defaultlogger"}
    ];
    return iocItems;
});
