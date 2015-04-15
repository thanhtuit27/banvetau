define([
	"server/module/tours/context/tourCommandContext"
	],function(){
	var contextConfigs=[
		{key:"Tours_Query", instanceOf:"server/mocks/module/tours/context/tourQueryContext"},
		{key:"Tours_Command", instanceOf:"server/module/tours/context/tourCommandContext"}
		//{key:"Tours_Query", instanceOf:"server/module/tours/context/tourQueryContext"}
	];
	return contextConfigs;
});