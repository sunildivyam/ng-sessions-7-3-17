angular.module('articles')
.controller('articlesController', ['$scope', function($scope) {
	$scope.articles = [
		{
			"id": 1001,
			"title": "Learning JavaScript OOP",
			"description": "To start with, let's give you a simplistic, high-level view of what Object-oriented programming (OOP) is. We say simplistic, because OOP can quickly get very complicated, and giving it a full treatment now would probably confuse more than help. The basic idea of OOP is that we use objects to model real world things that we want to represent inside our programs, and/or provide a simple way to access functionality that would otherwise be hard or impossible to make use of."
		},
		{
			"id": 1002,
			"title": "Class Instances",
			"description": "When an object instance is created from a class, the class's constructor function is run to create it. This process of creating an object instance from a class is called instantiation — the object instance is instantiated from the class"
		},
		{
			"id": 1003,
			"title": "Node JS- The server side JavaScript",
			"description": "Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. Node.js' package ecosystem, npm, is the largest ecosystem of open source libraries in the world. HTML5 is the next major revision of the HTML standard superseding HTML 4.01, XHTML 1.0, and XHTML 1.1. HTML5 is a standard for structuring and presenting content on the World Wide Web. HTML5 is a cooperation between the World Wide Web Consortium (W3C) and the Web Hypertext Application Technology Working Group (WHATWG)."
		},
		{
			"id": 1004,
			"title": "Starting with HTML 5",
			"description": "HTML5 is the latest and most enhanced version of HTML.Technically, HTML is not a programming language, but rather a mark up language"
		}
	];


}]);