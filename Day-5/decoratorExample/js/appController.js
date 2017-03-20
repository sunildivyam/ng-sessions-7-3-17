angular.module('decoratorExample')
.controller('appController', ['$scope', function($scope){
	$scope.logMessage = 'Hello world';
	$scope.logs = [];
}]);