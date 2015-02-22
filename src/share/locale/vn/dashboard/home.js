define(function(){
	var resource=getResource();
	return resource;
	function getResource(){
		var resource={
			tourQuickSearch:{
				from:"Tu",
				to:"Den",
				title:"Thông tin hành trình",
				ticketTye:{
					leave:"Luot di",
					arrive:"Luot ve"
				},
				fromDate:"Ngay di",
				toDate:"Ngay ve",
				search:"Tim kiem"
			}
		};
		return resource;
	}
});