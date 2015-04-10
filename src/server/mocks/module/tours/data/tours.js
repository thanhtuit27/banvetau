define(function(){
	var data=[
		{
			id:1,
			name:"HCM - HN", 
			fromLocation:{name:"HCM", id:1, leaveOn:"13/04/2015 04:30"},
			toLocation:{name:"HN", id:2, arriveOn: "13/04/2015 06:30"},
			segments:[
				{id: 1, name:"Conditioner",availableSeats: 30, totalSeats: 40, seats:[
					{id:1, type:"Chair", status:"Available"},
					{id:2, type:"Chair", status:"Available"},
					{id:3, type:"Chair", status:"Booked"},
					{id:4, type:"Sofa", status:"Booked"},
					{id:5, type:"Sofa", status:"Booked"},
					{id:6, type:"Sofa", status:"Booked"},
					{id:7, type:"Sofa", status:"Booked"},
					{id:8, type:"Bed", status:"Repairing"},
					{id:9, type:"Bed", status:"Repairing"},
					{id:10, type:"Bed", status:"Repairing"},
					{id:11, type:"Bed", status:"Reserved"}
				]},
				{id: 2, name:"Chair Only, Without Conditioner",availableSeats: 30, totalSeats: 40, seats:[
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
				]}
			],
			train:{id:1, name:"TN1", availableSeats: 30, totalSeats: 40}
		},
		{
			id:2,
			name:"HCM - Nha Trang", 
			fromLocation:{name:"HCM", id:1, leaveOn:"13/04/2015 04:30"},
			toLocation:{name:"Nha Trang", id:2, arriveOn: "13/04/2015 06:30"},
			segments:[
				{id: 1, name:"Conditioner",availableSeats: 30, totalSeats: 40, seats:[
					{id:1, type:"Chair", status:"Available"},
					{id:2, type:"Chair", status:"Available"},
					{id:3, type:"Chair", status:"Booked"},
					{id:4, type:"Sofa", status:"Booked"},
					{id:5, type:"Sofa", status:"Booked"},
					{id:6, type:"Sofa", status:"Booked"},
					{id:7, type:"Sofa", status:"Booked"},
					{id:8, type:"Bed", status:"Repairing"},
					{id:9, type:"Bed", status:"Repairing"},
					{id:10, type:"Bed", status:"Repairing"},
					{id:11, type:"Bed", status:"Reserved"}
				]},
				{id: 2, name:"Chair Only, Without Conditioner",availableSeats: 30, totalSeats: 40, seats:[
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
				]}
			],
			train:{id:2, name:"SE02", availableSeats: 30, totalSeats: 40}
		}
	];
	return data;
});