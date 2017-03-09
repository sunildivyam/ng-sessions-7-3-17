angular.module('myApp1', []);
angular.module('myApp2', []);

angular.element(document).ready(function() {
	var rootElement1 = document.getElementById("myapp1");
	var rootElement2 = document.getElementById("myapp2");

	angular.bootstrap(rootElement1, ["myApp1"]);

	angular.bootstrap(rootElement2, ["myApp2"]);
});


