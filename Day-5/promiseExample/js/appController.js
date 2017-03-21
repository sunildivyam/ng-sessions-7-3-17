angular.module('promiseExample')
.controller('appController', ['$scope', 'appService', function($scope, appService){

	// Task A
	$scope.taskAValues = [];
	$scope.taskACompleted = false;
	appService.doTaskA().then(function(response) {
		$scope.taskACompleted = true;
	}, function(rejection) {
		// nothing to do
	}, function(statusValue) {
		$scope.taskAValues.push(statusValue);
	});


	// Task B

	$scope.taskBValues = [];
	$scope.taskBCompleted = false;
	appService.doTaskB().then(function(response) {
		$scope.taskBCompleted = true;
	}, function(rejection) {
		// nothing to do
	}, function(statusValue) {
		$scope.taskBValues.push(statusValue);
	});


	// Task C

	$scope.taskCValues = [];
	$scope.taskCCompleted = false;
	appService.doTaskC().then(function(response) {
		$scope.taskCCompleted = true;
	}, function(rejection) {
		// nothing to do
	}, function(statusValue) {
		$scope.taskCValues.push(statusValue);
	});
}]);