define(function(){
	var factory={
		create:create
	};
	return factory;

	function create(){
		return new ResponseMessage();
		function ResponseMessage(){
			var errors=[], status=200, data=null;
			this.setStatus = setStatus;
			this.setData= setData;
			this.addError=addError;
			this.toJson=toJson;

			function toJson(){
				return {
					status:status,
					errors:errors,
					data:data
				};
			}
			function setStatus(newStatus){
				status=newStatus;
			}

			function setData(newData){
				data=newData;
			}

			function addError(error){
				errors.push(error);
			}
		}
		
	}
});