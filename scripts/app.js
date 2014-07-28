angular.module("BonsdevApp", ["ngRoute", "BonsdevApp.controllers"])
	.config(["$routeProvider", function ($routeProvider) {
		$routeProvider
		.when("/index", {templateUrl: "templates/index.html", controller: "IndexController"})
		.when("/about", {templateUrl: "templates/index.html", controller: "IndexController"})
		.when("/case", {templateUrl: "templates/index.html", controller: "IndexController"})
		.when("/tech", {templateUrl: "templates/index.html", controller: "IndexController"})
		.when("/contact", {templateUrl: "templates/index.html", controller: "IndexController"})
		.otherwise({redirectTo: "/index"});
	}]);