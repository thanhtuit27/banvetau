define(function(){
	var enums=getEnums();
	return enums;

	function getEnums(){
		var enums={
			applicationType:{
				client:"client",
				server:"server"
			},
			appMode:{
				debug:"debug",
				release:"release"
			},
			http:{
				httpStatus:getHttpStatus()
			}
		};
		return enums;
	}
	function getHttpStatus(){
		var httpStatus={
			success:200,
			created:201,
			accepted: 202,
			nonAuthoritation:203,
			noContent: 204,
			resetContent:205,
			partialContent: 207,
			found: 302,
			notModified: 304,
			useProxy: 305,
			badRequest: 400,
			unauthorized: 401,
			forbidden: 403,
			notFound: 404,
			methodNotAllowed: 405,
			notAcceptable: 406,
			requestTimeout: 408,
			conflict: 409,
			requestURITooLong: 414,
			unsupportedMediaType: 415,
			expectationFailed: 417,
			internalServerError:500,
			notImplemented: 501,
			badGateway: 502,
			serviceUnavailable: 503,
			gatewayTimeout: 504

		};
		return httpStatus;
	}
});