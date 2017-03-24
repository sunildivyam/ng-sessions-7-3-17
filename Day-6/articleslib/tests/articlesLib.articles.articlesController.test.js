describe('Articles Library', function () {

  beforeEach(module('articlesLib'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
  }));

  describe('Describe Method Name', function () {
		// it('1 + 1 should equal 2', function () {
		// 	var $scope = {};
		// 	var controller = $controller('articlesController', { $scope: $scope });
		// 	var sum = $scope.methodName(params);
		// 	expect(sum).toBe(3);
		// });
	});
});