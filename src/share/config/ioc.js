define([
    "share/helper/logging/defaultlogger",
], function() {
    var iocItems = [
        { type: 'ILogger', instanceOf: "share/helper/logging/defaultlogger"}
    ];
    return iocItems;
});
