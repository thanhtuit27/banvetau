define(function(){
	var data=[
		{trainId:1, id: 1, name:"Conditioner",availableSeats: 30, totalSeats: 40, seats:[
			{id:1, type:"Chair", status:"Available"},
			{id:2, type:"Chair", status:"Available"},
			{id:3, type:"Chair", status:"Booked"},
			{id:4, type:"Sofa", status:"Booked"},
			{id:5, type:"Sofa", status:"Booked"},
			{id:6, type:"Sofa", status:"Booked"},
		]},
		{trainId:1, id: 2, name:"Chair Only, Without Conditioner",availableSeats: 30, totalSeats: 40, seats:[
			{id:1, type:"Chair", status:"Available"},
			{id:2, type:"Chair", status:"Available"},
			{id:3, type:"Chair", status:"Booked"},
			{id:4, type:"Chair", status:"Booked"},
			{id:5, type:"Chair", status:"Booked"},
			{id:6, type:"Chair", status:"Booked"},
			{id:7, type:"Chair", status:"Booked"},
			{id:8, type:"Chair", status:"Repairing"},
			{id:9, type:"Chair", status:"Repairing"},
			{id:10, type:"Chair", status:"Repairing"},
			{id:11, type:"Chair", status:"Reserved"}
		]},
		{trainId:2, id: 3, name:"Chair Only, Without Conditioner",availableSeats: 30, totalSeats: 40, seats:[
			{id:1, type:"Chair", status:"Available"},
			{id:2, type:"Chair", status:"Available"},
			{id:3, type:"Chair", status:"Booked"},
			{id:4, type:"Chair", status:"Booked"},
			{id:5, type:"Chair", status:"Booked"},
			{id:6, type:"Chair", status:"Booked"},
			{id:7, type:"Chair", status:"Booked"},
			{id:8, type:"Chair", status:"Repairing"},
			{id:9, type:"Chair", status:"Repairing"},
			{id:10, type:"Chair", status:"Repairing"},
		]}
	];
	return data;
});