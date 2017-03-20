var logStackFunc = function($log) {

	return {
		restrict: 'EA',
		templateUrl: 'pages/log-stack.html',
		link: function($scope, iElm, iAttrs) {
			$scope.logs = $log.stack;
		}
	};

};

logStackFunc.$inject = ['$log'];

angular.module('decoratorExample').directive('logStack', logStackFunc);

