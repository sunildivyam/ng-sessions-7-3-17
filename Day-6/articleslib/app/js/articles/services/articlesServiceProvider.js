var articlesServiceProviderFunc = function() {
	var postFixText = '';

	function postFixTextToArticles(articles) {
		if (articles instanceof Array && articles.length) {
			articles.filter(function(article) {
				article.title = article.title + " | " + postFixText;
			});
		}
		return articles;
	}

	return {
		setPostFixText: function(text) {
			postFixText = text;
		},
		$get: ['$http', '$q', function($http, $q) {
			function fetchArticles() {
				var httpPromise = $http({
					method: 'GET',
					url: 'data/articles.json',
					params: {},
					headers: {
						'Content-type': "application/json"
					},
					//data: {},
					cache: true
				});

				if (postFixText) {
					var defferedObj = $q.defer();

					httpPromise.then(function(response) {
						response.data = postFixTextToArticles(response.data);
						defferedObj.resolve(response);
					}, function(rejection) {
						defferedObj.reject(rejection);
					});

					return defferedObj.promise;
				} else {
					return httpPromise;
				}
			}

			function fetchArticle(articleId) {
				return $http({
					method: 'GET',
					url: 'data/article' + articleId + '.json',
					params: {},
					headers: {
						'Content-type': "application/json"
					},
					//data: {},
					cache: true
				});
			}

			return {
				getArticles: fetchArticles,
				getArticle: fetchArticle
			};
		}]
	};
};

articlesServiceProviderFunc.$inject = [];
module.exports = articlesServiceProviderFunc;
