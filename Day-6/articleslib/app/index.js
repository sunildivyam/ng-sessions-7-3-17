var angular = require('angular');
window.$ = require('jquery');
window.jQuery = window.$;
require('angular-ui-router');

angular.module("templates", []);
require('./templates/templates');

angular.module('articlesLib', [
	'ui.router',
	'templates',
	require('./js/base/base').name,
	require('./js/articles/articles').name,
	require('./js/tags/tags').name
])

.config(['$httpProvider', '$urlRouterProvider', '$stateProvider', '$locationProvider', function($httpProvider, $urlRouterProvider, $stateProvider, $locationProvider) {

	$urlRouterProvider.otherwise('/');

    $stateProvider.state({
        name: 'home',
        url: '/',
        templateProvider: ['$templateCache', function($templateCache) {
            return $templateCache.get('base/home.html');
        }],
        controller: 'appController'
    })
    .state({
        name: 'error',
        url: '/error',
        templateProvider: ['$templateCache', function($templateCache) {
            return $templateCache.get('base/error.html');
        }]
    })
    .state({
        name: 'articles',
        url: '/articles',
        templateProvider: ['$templateCache', function($templateCache) {
            return $templateCache.get('articles/landing.html');
        }],
        controller: 'articlesController'
    })
    .state({
        name: 'tags',
        url: '/tags',
        templateProvider: ['$templateCache', function($templateCache) {
            return $templateCache.get('tags/landing.html');
        }],
        controller: 'tagsController'
    });

    // Enables html5Mode Urls
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: true
    });

    $httpProvider.interceptors.push('customHttpInterceptor');
}]);
