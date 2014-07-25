angular.module("BonsdevApp", ["ngRoute", "BonsdevApp.controllers"])
	.config(["$routeProvider", function ($routeProvider) {
		$routeProvider
		.when("/index", {templateUrl: "templates/index.html", controller: "IndexController"})
		.when("/quote", {templateUrl: "templates/quoteform.html", controller: "QuoteFormController"})
		.otherwise({redirectTo: "/index"});
	}]);