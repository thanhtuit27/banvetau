define(function(){
	var builder={
		createQuery:createQuery
	};
	return builder;

	function createQuery(options){
		return options||[];
	}
});