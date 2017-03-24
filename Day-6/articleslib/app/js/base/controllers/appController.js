var appControllerFunc = function($scope){
	$scope.appTitle = "ARTICLES LIBRARY";

	$scope.$on('$stateChangeSuccess', function(/* event, toState , fromState, toParams, fromParams */){
		//console.log(toState);
	});
};

appControllerFunc.$inject = ['$scope'];
module.exports = appControllerFunc;