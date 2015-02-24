define([
    "share/helper/logging/defaultlogger",
], function() {
    var iocItems = [
        { type: 'ILogger', instanceOf: "share/helper/logging/defaultlogger"},
        { type: 'Promise', instanceOf: "share/model/promise"}
    ];
    return iocItems;
});
