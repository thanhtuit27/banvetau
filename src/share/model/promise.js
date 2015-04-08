define(function(){
	var promiseFactory={
		create:create
	};
	return promiseFactory;

	function create(){
		return new Promise();

		function Promise(){
			var promiseStatus={none:"none",success:"success", fail:"fail"};
			var result=null, status=promiseStatus.none, error=null;
			var callback={
				success:System.emptyFn,
				fail:System.emptyFn,
				always:System.emptyFn
			};
			var promise={
				always:always,
				then:then,
				resolve:resolve,
				reject:reject
			};
			return promise;
			function reject(errorObj, data){
				result=data;
				error=errorObj;
				status=promiseStatus.fail;
				processCallback();
			}
			function resolve(data){
				result=data;
				status=promiseStatus.success;
				processCallback();
			}

			function processCallback(){
				if(status===promiseStatus.none){return;}
				if(status===promiseStatus.success && callback.success){
					callback.success(result);
				}

				if(status===promiseStatus.fail && callback.fail){
					callback.fail(error, result);
				}

				if(callback.always){
					callback.always(result, status, error);
				}
			}

			function then(successCallback, failCallback){
				if(successCallback){
					callback.success=successCallback;
				}

				if(failCallback){
					callback.fail=failCallback;
				}
				processCallback();
				/*if(status===promiseStatus.none){
					return;
				}

				if(status===promiseStatus.success && successCallback){
					successCallback(result);
				}

				if(status===promiseStatus.fail && failCallback){
					failCallback(error, result);
				}*/
			}
			function always(callback){
				if(callback){
					callback.always=callback;
				}
				//if(!callback){return;}
				//callback();
			}
		}
	}

});