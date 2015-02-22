define([
	"share/service/locationService",
	"share/service/resourceManager",
	],function(locationService, resourceManager){
	var service={
		resolve:resolve
	};
	return service;

	function resolve(resourceKey, languageCode){
		var resourceFile = locationService.getResourceFileUrl(resourceKey, languageCode);
		return resourceManager.get(resourceKey, resourceFile);
	}
});