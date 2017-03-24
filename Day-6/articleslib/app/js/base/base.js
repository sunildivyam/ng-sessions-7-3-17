angular.module('articlesLib.base', [])
.factory('customHttpInterceptor', require('./services/customHttpInterceptor'))

.controller('appController', require('./controllers/appController'))

.directive('item', require('./directives/item'));

module.exports = angular.module('articlesLib.base');