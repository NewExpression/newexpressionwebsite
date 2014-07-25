angular.module("BonsdevApp.controllers", [])
	.controller("QuoteController" ,function ($scope) {
		$scope.init = function () {
			console.log("INIT");
		};
	})
	.controller("IndexController", function ($scope) {
		$scope.caseitems = [{
                        thumbnail: "/misc/imgs/case1.png",
                        title: "Case Study one",
                        info: "Case Infomration"
                },{
                        thumbnail: "/misc/imgs/case1.png",
                        title: "Case Study one",
                        info: "Case Infomration"
                },{
                        thumbnail: "/misc/imgs/case1.png",
                        title: "Case Study one",
                        info: "Case Infomration"
                },{
                        thumbnail: "/misc/imgs/case1.png",
                        title: "Case Study one",
                        info: "Case Infomration"
                }];
            
                $scope.services = [{
                        thumbnail: "/misc/imgs/desktop.png",
                        info: "网站设计 和网站开发",
                        title: "网站设计和网站开发"
                },{
                        thumbnail: "/misc/imgs/desktop.png",
                        info: "网站设计 和网站开发",
                        title: "网站设计和网站开发"
                },{
                        thumbnail: "/misc/imgs/desktop.png",
                        info: "网站设计 和网站开发",
                        title: "网站设计和网站开发"
                },{
                        thumbnail: "/misc/imgs/desktop.png",
                        info: "网站设计 和网站开发",
                        title: "网站设计和网站开发"
                }];
	})
	.controller("QuoteFormController", function ($scope) {
		$scope.quote = {};
                
                $scope.projectTypes = ["Web development", "Mobile Responsive Website"];
                
                $scope.monthOpitons = ["One Month", "Two Month", "Three Month", "Hale Year"];
                
		$scope.nextStep = function (event) {
			var el = angular.element(event.target);
			var step = el.parents(".step").attr("data-step");
			if (step) {
				nexstep = angular.element(".step-" + ( parseInt(step) + 1));
				el.parents(".step").addClass("hideme");
				nexstep.removeClass("hideme");
			}
		};

		$scope.previewQuote = function (event) {
			angular.element(".step").addClass("hideme");
			var preview = angular.element(".preview");
			preview.removeClass("hideme");
		};
	});