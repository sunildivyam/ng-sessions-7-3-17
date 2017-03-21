angular.module('promiseExample')
.controller('appController', ['$scope', 'appService', '$q', function($scope, appService, $q){

	// Task A
	$scope.taskAValues = [];
	$scope.taskACompleted = false;
	var taskAPromise = appService.doTaskA();
	taskAPromise.then(function(response) {
		$scope.taskACompleted = true;
	}, function(rejection) {
		// nothing to do
	}, function(statusValue) {
		$scope.taskAValues.push(statusValue);
	});


	// Task B

	$scope.taskBValues = [];
	$scope.taskBCompleted = false;
	var taskBPromise = appService.doTaskB();
	taskBPromise.then(function(response) {
		$scope.taskBCompleted = true;
	}, function(rejection) {
		// nothing to do
	}, function(statusValue) {
		$scope.taskBValues.push(statusValue);
	});


	// Task C

	$scope.taskCValues = [];
	$scope.taskCCompleted = false;
	var taskCPromise = appService.doTaskC();
	taskCPromise.then(function(response) {
		$scope.taskCCompleted = true;
	}, function(rejection) {
		// nothing to do
	}, function(statusValue) {
		$scope.taskCValues.push(statusValue);
	});


	$q.all([taskAPromise, taskBPromise, taskCPromise]).then(function(response) {
		$scope.isAllCompleted = true;
	});

	/// Angular 1.5.8
	// $q.race([taskAPromise, taskBPromise, taskCPromise]).then(function(response) {
	// 	$scope.isCompletedAtLeastOne = true;
	// });
}]);