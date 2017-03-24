var articlesLstFunc = function(){

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
		templateUrl: 'articles/articles-list.html',
		link: function($scope /* , element, attrs */) {
			$scope.onViewClicked = function(event, mode) {
				event.preventDefault();
				$scope.listMode = mode;
			};
		}
	};
};

articlesLstFunc.$inject = [];
module.exports = articlesLstFunc;