define(function(){
	var helper={
		setValue:setValue,
		getValue:getValue,
		getValueByPath:getValueByPath
	};
	return helper;
	function getValueByPath(model, proPath){
		if(!model || !proPath){return String.empty;}

		var props=proPath.split(".");
		var value=model;
		for(var proIndex=0; proIndex< props.length; proIndex++){
			if(value[props[proIndex]]===undefined){
				value=String.empty;
				break;
			}
			value=value[props[proIndex]];
		}
		return value;
	}
	function getValue(model, field){
		if(!model || !field){ return undefined;}
		return model[field];
	}
	function setValue(model, field, value){
		if(!model || !field){ return;}
		model[field]=value;
	}
});