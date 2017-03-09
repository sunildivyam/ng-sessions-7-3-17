angular.module('myApp1', []);

//angular.module('myApp2', []);

angular.element(document).ready(function() {
	var rootElement1 = document.getElementById("my-app1");	// my-app1
	//var rootElement2 = document.getElementById("my-app2");	// my-app2

	angular.bootstrap(rootElement1, ['myApp1']);

	//angular.bootstrap(rootElement1, ['myApp2']);

});
