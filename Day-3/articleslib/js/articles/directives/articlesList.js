angular.module('articles')
.directive('articlesList', [function(){

	return {
		restrict: "E",
		scope: {
			header: '@',
			items: '=',
			statusMessage: '@',
			discount: '=',
			listMode: '@',
			onSelect: '&'
		},
		templateUrl: 'pages/articles-list.html',
		link: function($scope, element, attrs) {
			$scope.onViewClicked = function(event, mode) {
				event.preventDefault();
				$scope.listMode = mode;
			};
		}
	};
}]);