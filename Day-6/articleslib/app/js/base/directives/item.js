var itemDirFunc = function(){

	return {
		restrict: "E",
		template: '<div> <span ng-bind="name"></span> : {{count}} items. <input type="number" ng-model="count" min="0" max="500"/></div>',
		link: function($scope, element, attrs) {
			$scope.name = attrs.name;
		}
	};
};

itemDirFunc.$inject = [];
module.exports = itemDirFunc;