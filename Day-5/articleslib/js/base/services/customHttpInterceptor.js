angular.module('articlesLib')
.factory('customHttpInterceptor', ['$q', function($q) {

	function request(config) {
		// modify config
		// Lets say you want to add Authorization header for each requests.

		// config.headers['Authorization'] = 'Bearer ' + accountService.getToken();

		return config;
	}

	function requestError(rejection) {
		// handle rejection (do something on error)

		return $q.reject(rejection);
	}

	function response(response) {
		// modify response

		 return response;
	}

	function responseError(rejection) {
		// handle rejection (do something on error)
		if (rejection.status === 404) {
			window.location.href = 'pages/error.html';
			// $state.go('errorstatename');
		}
		return $q.reject(rejection);
	}

	return {
		request: request,
		requestError: requestError,
		response: response,
		responseError: responseError
	};
}]);