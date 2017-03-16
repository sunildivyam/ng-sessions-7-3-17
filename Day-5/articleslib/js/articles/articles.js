angular.module('articles', [])
.config(['articlesServiceProvider', function(articlesServiceProvider) {
	articlesServiceProvider.setPostFixText("MY LIB");
}]);