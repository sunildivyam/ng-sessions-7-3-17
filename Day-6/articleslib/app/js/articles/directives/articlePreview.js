var articleDirFunc = function(){

	return {
		restrict: "EA",
		scope: {
			article: '='
		},
		templateUrl: 'articles/article-preview.html',
		link: function(/* $scope, element, attrs */) {
		}
	};
};

articleDirFunc.$inject = [];
module.exports = articleDirFunc;