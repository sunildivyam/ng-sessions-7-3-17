var logInputFunc = function($log) {

	return {
		scope: {
			message: '='
		},
		templateUrl: 'pages/log-input.html',
		restrict: 'EA',
		link: function($scope, iElm, iAttrs) {
			$scope.types = $log.types;

			$scope.onLogBtnClick = function(event, logType) {
				$log[logType]($scope.message);
			};
		}
	};

};

logInputFunc.$inject = ['$log'];

angular.module('decoratorExample').directive('logInput', logInputFunc);

