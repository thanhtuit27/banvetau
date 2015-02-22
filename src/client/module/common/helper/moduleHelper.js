define(function(){
	var helper={
		getCurrentModule:getCurrentModule
	};
	return helper;
	function getCurrentModule(){
		var matches=window.location.hash.match(/#\/([\w,-]*)/);
		if(!matches || matches.length<=0){
			return String.empty;
		}
		return matches[1];
	}
});