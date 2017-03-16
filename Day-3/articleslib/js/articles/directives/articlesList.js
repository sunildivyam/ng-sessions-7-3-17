angular.module('articles')
.directive('articlesList', [function(){

	return {
		restrict: "E",
		scope: {
			header: '@',
			items: '=',
			statusMessage: '@',
			discount: '='
		},
		templateUrl: 'pages/articles-list.html',
		link: function($scope, element) {
			// here you can add behavior to the DOM or interact with it.
			// element gives you the root element of the directive itself
			//$scope gives you the scope object of the directive.
		}
	};
}]);