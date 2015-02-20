define(function(){
	var enums=getEnums();
	return enums;

	function getEnums(){
		var enums={
			formControlMode:{
				simple:'simple',
				advance:'advance'
			},
			displayMode:{
				inline:'inline'
			}
		};
		return enums;
	}
});