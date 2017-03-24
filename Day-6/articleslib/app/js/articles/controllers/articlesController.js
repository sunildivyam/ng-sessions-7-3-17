var articlesControllerFunc = function($scope, articlesService) {
	$scope.articles = [];
	$scope.notFoundMsg = "No Articles found";

	function getArticles() {
		$scope.notFoundMsg = "loading...";
		articlesService.getArticles().then(function(response) {
			if (response && response.data) {
				$scope.articles = response.data;
				$scope.notFoundMsg = '';
			} else {
				$scope.articles = [];
				$scope.notFoundMsg = "No Articles found";
			}
		}, function(rejection) {
			$scope.notFoundMsg = rejection.status + ' | ' + rejection.statusText;
			$scope.articles = [];
		});
	}

	function getArticle(articleId) {
		articlesService.getArticle(articleId).then(function(response) {
			if (response && response.data) {
				$scope.currentArticle = response.data;
			} else {
				$scope.articles = {};
			}
		}, function(/* rejection */) {
			$scope.articles = {};
		});
	}

	$scope.onSelectArticle = function(event, article) {
		$scope.currentArticleId = article && article.id;
	};

	$scope.$watch('currentArticleId', function(newValue /*, oldValue */) {
		if (newValue) {
			getArticle(newValue);
		}
	});

	$scope.$on('$stateChangeSuccess', function(event, toState /*, fromState, toParams, fromParams */){
		if (toState) {
			if (toState.name === "articles" ) {
				getArticles();
			}
		}
	});

};

articlesControllerFunc.$inject = ['$scope', 'articlesService'];

module.exports = articlesControllerFunc;