'use strict';
(function() {

	angular.module('articlesLib.articles', [])
	.config(['articlesServiceProvider', function(articlesServiceProvider) {
		articlesServiceProvider.setPostFixText("MY LIB");
	}]);


	angular.module('articlesLib.articles')
	.provider('articlesService', require('./services/articlesServiceProvider'))

	.controller('articlesController', require('./controllers/articlesController'))

	.directive('articlesList', require('./directives/articlesList'))
	.directive('articlePreview', require('./directives/articlePreview'))

	.filter('discount', require('./filters/discount'));

	module.exports = angular.module('articlesLib.articles');
})();