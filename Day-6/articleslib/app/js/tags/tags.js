angular.module('articlesLib.tags', [])
.provider('tagsService', require('./services/tagsServiceProvider'))

.controller('tagsController', require('./controllers/tagsController'));

module.exports = angular.module('articlesLib.tags');
