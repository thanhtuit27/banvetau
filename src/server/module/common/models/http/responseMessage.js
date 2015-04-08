define(function(){
	var factory={
		create:create
	};
	return factory;

	function create(){
		return new ResponseMessage();
		function ResponseMessage(){
			var self=this;
			var errors=[], status=200, data=null;
			self.setStatus = setStatus;
			self.setData= setData;
			self.addError=addError;
			self.addErrors=addErrors;
			self.toJson=toJson;
			self.importFrom=importFrom;

			function importFrom(responseMessage){
				errors=[];
				status=200;
				data=null;
				if(!responseMessage){return;}
				var json=responseMessage.toJson();
				self.setStatus(json.status);
				self.addErrors(json.errors);
				self.setData(json.data);
			}
			function addErrors(errors){
				if(!errors || errors.lenght<=0){return;}
				errors.forEach(function(error){
					addError(error);
				});
			}
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