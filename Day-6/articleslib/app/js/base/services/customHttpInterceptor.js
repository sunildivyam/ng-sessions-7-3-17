var customHttpInterceptorFunc = function($q, $injector) {

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
            // window.location.href = 'pages/error.html';
            // Redirect to state or any other behavior
            $injector.get('$state').go('error');
        }
        return $q.reject(rejection);
    }

    return {
        request: request,
        requestError: requestError,
        response: response,
        responseError: responseError
    };
};

customHttpInterceptorFunc.$inject = ['$q', '$injector'];
module.exports = customHttpInterceptorFunc;