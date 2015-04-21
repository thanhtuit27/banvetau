define([
	"server/module/tours/context/tourCommandContext"
	],function(){
	var contextConfigs=[
		{key:"Locations_Query", instanceOf:"server/mocks/module/tours/context/locationQueryContext"},
		{key:"Trains_Query", instanceOf:"server/mocks/module/tours/context/trainQueryContext"},
		{key:"Tours_Query", instanceOf:"server/mocks/module/tours/context/tourQueryContext"},
		{key:"Tours_Command", instanceOf:"server/module/tours/context/tourCommandContext", dependOn:[
			{name:"Location", type:"Query"},
			{name:"Train", type:"Query"}
		]}
		//{key:"Tours_Query", instanceOf:"server/module/tours/context/tourQueryContext"}
	];
	return contextConfigs;
});