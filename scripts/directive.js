angular.module("BonesApp.Directives", [])
	.directive("ngElementReady", [function () {
		return {
			priority: -1000,
			restrict: "A",
			link: function ($scope, $element, $attributes) {
				$scope.$emit("onload");
			}
		};
	}]);