angular.module('articles')
.factory('articlesService', ['$http', function($http){

	function fetchArticles() {
		return $http({
			method: 'GET',
			url: 'data/articles.json',
			params: {},
			headers: {
				'Content-type': "application/json"
			},
			//data: {},
			cache: true
		});
	}

	return {
		getArticles: fetchArticles
	};
}]);