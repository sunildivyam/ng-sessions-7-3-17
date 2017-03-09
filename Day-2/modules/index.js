angular.module("myApp.feature1", []);

angular.module('myApp', ["myApp.feature1"])

.config(["$logProvider", function($logProvider, $httpProvider) {
	$logProvider.debugEnabled(false);
}])


.run(["$rootScope", "$log", function($rootScope, $log, $http) {
	$rootScope.myLogService = $log;
}])


.controller()
.directive()




// angular.module("myApp",[]).config(["$logProvider",function(a){a.debugEnabled(!1)}]).run(["$rootScope","$log",function(a,b){a.myLogService=b}]);