define(["share/model/collection/hash"],function (hashFactory) {
    "use strict";
    var iocHelper={
        create:create
    };
    return iocHelper;


    function create(){
        var registeredItems = hashFactory.create();
        var ioc = {
            resolve: resolve,
            load: load
        };
        return ioc;

        function resolve(type, name) {
            var key = getKey(type, name);
            if (!registeredItems.get(key)) {
                return String.isNullOrWhiteSpace(name)?null : resolve(type);
            }
            var item = registeredItems.get(key);
            if (item.isInstantiated === true) {
                return item.instance;
            }
            item = createInstance(item);
            registeredItems.update(key, item);
            return item.instance;
        }
        /*
        {type, name, instanceOf, creationType: normal, singleton, ....}
        all referenced js file pointed by instanceOf must be loaded before calling to this
        */
        function createInstance(item) {
            var instance = {
                isInstantiated: true,
                instance: require(item.instanceOf)
            };
            var params = item.params||{};
            if(instance.instance.injectConstructor){
                instance.instance.injectConstructor(params);
            }
            return instance;
        }

        function load(iocUrl) {
            var iocConfig = require(iocUrl);

            if (!iocConfig || iocConfig.length <= 0) { return; }

            for (var index = 0; index < iocConfig.length; index++) {
                var iocConfigItem = iocConfig[index];
                var itemKey = getKey(iocConfigItem.type, iocConfigItem.name);
                registeredItems.add(itemKey, iocConfigItem);
            }
        }

        function getKey(type, name) {
            var key = String.format("{0}{1}", type, String.isNullOrWhiteSpace(name) ? "" : name.capitalize());
            return key;
        }
    }
});
