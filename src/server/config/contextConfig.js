define([
	"server/module/tours/context/tourCommandContext"
	],function(){
	var contextConfigs=[
		{key:"Segments_Command", instanceOf:"server/mocks/module/tours/context/segmentCommandContext"},
		{key:"Locations_Command", instanceOf:"server/mocks/module/tours/context/locationCommandContext"},
		{key:"Trains_Command", instanceOf:"server/mocks/module/tours/context/trainCommandContext"},
		{key:"Tours_Query", instanceOf:"server/mocks/module/tours/context/tourQueryContext"},
		{key:"Tours_Command", instanceOf:"server/module/tours/context/tourCommandContext", dependOn:[
			{name:"Location", type:"Command"},
			{name:"Train", type:"Command"},
			{name:"Segment", type:"Command"}
		]}
		//{key:"Tours_Query", instanceOf:"server/module/tours/context/tourQueryContext"}
	];
	return contextConfigs;
});