angular.module('promiseExample')
.directive('task', [function(){

	return {
		restrict: 'AE',
		templateUrl: 'pages/task.html',
		scope: {
			title: '@',
			isCompleted: '=',
			values: '='
		},
		link: function($scope, iElm, iAttrs) {
			//
		}
	};
}]);