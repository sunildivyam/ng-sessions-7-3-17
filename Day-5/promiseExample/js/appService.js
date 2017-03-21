angular.module('promiseExample')
.factory('appService', ['$q', '$timeout', function($q, $timeout){

	function performTask(value, maxValue, deferredO) {
		if (value > maxValue) {
			deferredO.resolve(value);
		}
		deferredO.notify(value);
		value = value + 1;
		$timeout(function(){
			return performTask(value, maxValue, deferredO);
		}, 500);
	}

	function performTaskA() {
		var deferredObj = $q.defer();
		performTask(0, 10, deferredObj);

		return deferredObj.promise;
	}

	function performTaskB() {
		var deferredObj = $q.defer();
		performTask(0, 30, deferredObj);

		return deferredObj.promise;
	}

	function performTaskC() {
		var deferredObj = $q.defer();
		performTask(0, 20, deferredObj);

		return deferredObj.promise;
	}

	return {
		doTaskA: performTaskA,
		doTaskB: performTaskB,
		doTaskC: performTaskC
	};
}]);