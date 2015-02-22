define(function(){
	var helper={
		get:get,
		set:set,
		remove:remove
	};
	return helper;
	function remove(key){
		sessionStorage.removeItem(key);
	}
	function set(key, data){
		var dataStr=JSON.stringify(data);
		sessionStorage.setItem(key, dataStr);
	}
	function get(key){
		var str=sessionStorage.getItem(key);
		if(String.isNullOrWhiteSpace(str)){
			return String.empty;
		}
		return JSON.parse(str);
	}
});