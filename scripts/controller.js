angular.module("BonsdevApp.controllers", ["BonesApp.Directives"])
	.controller("QuoteController" ,function ($scope) {
		$scope.init = function () {
                        //TODO::
		};
	})
	.controller("IndexController", function ($scope) {
                var $ = window.jQuery;
                var menuanchor = ["about", "case", "tech", "contact"];
                $scope.init = function () {
                        $("body").delegate(".upper", "click",function () {
                                var self = angular.element(this);
                                if (self.hasClass("clicked")) {
                                        $("#footer").removeAttr("style");
                                        $("#footer .wrapper .s1 .address").removeAttr("style");
                                        self.removeClass("clicked");
                                }
                                else {
                                        self.addClass("clicked");
                                        $("#footer").css({height: 400});
                                        $("#footer .wrapper .s1 .address").css({bottom: 254});
                                }
                        });

                        $("body").delegate(".menu .item", "click", function () {
                                var anchor = $(this).attr("menuanchor");
                                for (var i = 0; i < menuanchor.length; i++) {
                                        if (menuanchor[i] == anchor) {
                                                break;
                                        }
                                }
                                $.fn.fullpage.moveTo(i + 1, 0);
                        });

                };
                angular.element(document).scroll(function () {
                        var scrollTop = angular.element(document).scrollTop();
                        if (scrollTop > 0) {
                                angular.element("body .header").addClass("menuactive");
                        }
                        else {
                                 angular.element("body .header").removeClass("menuactive");
                        }
                });

                $scope.$on("onload", function () {
                        var $ = window.jQuery;
                        if (!$("#fullpage").hasClass("loaded")) {
                                var menu = $("#menu");
                                $("#fullpage").fullpage({
                                        autoScrolling: true,
                                        onLeave: function(index, nextIndex, direction){
                                                if (direction == "up") {
                                                        if (index - 2 <= 0) {
                                                                angular.element("body .header").removeClass("menuactive");
                                                        }
                                                        var anchor = menuanchor[parseInt(index) - 2];
                                                }
                                                else {
                                                        var anchor = menuanchor[parseInt(index)];
                                                        angular.element("body .header").addClass("menuactive");
                                                }
                                                $("#menu li").removeClass("active");
                                                $("#menu li[menuanchor='"+anchor+"']").addClass("active");


                                        }
                                });
                        }
                        $("#fullpage").addClass("loaded");
                });

		$scope.caseitems = [{
                        thumbnail: "/misc/imgs/case1.png",
                        title: "芙美儿美鞋馆",
                        keyword: ["阿里巴巴", "社交集成", "Magento", "微博", "电子商务平台"],
                        info: "芙美儿美鞋馆项目属于公司内部计划运营的电子商务平台,该平台以阿里巴巴为数据源,第三方平台包括微博, 微店, QQ空间等作为市场推广渠道, 利用自身技术优势，希望最终通过一个电子商务平台管理第三方平台营销数据和实现第三方平台的推广对接."
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
	});