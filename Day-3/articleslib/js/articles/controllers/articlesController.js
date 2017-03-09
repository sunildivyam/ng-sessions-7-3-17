angular.module('articles')
.controller('articlesController', ['$scope', 'articlesService', function($scope, articlesService) {
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

	getArticles();
}]);