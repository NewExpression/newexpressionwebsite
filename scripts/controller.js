angular.module("BonsdevApp.controllers", ["BonesApp.Directives"])
	.controller("QuoteController" ,function ($scope) {
		$scope.init = function () {
                        //TODO::
		};
	})
	.controller("IndexController", function ($scope) {
                var $ = window.jQuery;
                var menuanchor = ["about", "case", "tech", "contact"];
                // Dragable section1
                $(".section1 .wrapper > p").draggable();
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
                        var map = new BMap.Map("map");
                        map.centerAndZoom(new BMap.Point(116.404269,39.916042), 12);
                        var style = {
                                features: ["road", "building", "water", "land", "poi"],
                                style: "dark"
                        };
                        map.setMapStyle(style);
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
                        keywords: ["阿里巴巴", "社交集成", "Magento", "微博", "电子商务平台"],
                        info: "芙美儿美鞋馆项目属于公司内部计划运营的电子商务平台,该平台以阿里巴巴为数据源,第三方平台包括微博, 微店, QQ空间等作为市场推广渠道, 利用自身技术优势，希望最终通过一个电子商务平台管理第三方平台营销数据和实现第三方平台的推广对接."
                },{
                        thumbnail: "/misc/imgs/case2.png",
                        title: "男神女神 投票吧",
                        info: "男神女神投票吧 是一款新浪社交小应用,它通过爬虫程序从百度抓取明星排名榜和图片,最后把明星数据和图片存储在应用系统内部, 最后通过第三方API实现了微博用户投票,投票排名的功能.",
                        keywords: ["爬虫", "微博", "社交应用"]
                }];
            
                $scope.services = [{
                        thumbnail: "/misc/imgs/service2.png",
                        techKeyword: "IOS, Android, App 设计, 智能应用",
                        title: "手机移动端开发",
                        info: "手机移动端作为最具有潮流和最具有改变现在互联网格局的平台, 我们为客户精心提供了定制各类手机应用的开发服务, 请告诉我们您的诉求, 我们将竭力服务让移动应用搭载您的产品启航在未来智能手机大海中."
                },{
                        thumbnail: "/misc/imgs/service3.png",
                        techKeyword: "Weibo, 微信公众平台, 微博企业应用, 社交推广, SEO",
                        title: "品牌推广和社交营销",
                        info: "近几年社交平台呈现百花齐放的姿态包括微博,腾讯微博,开心网,人人社交,微信等等, 公司因此为客户提供社交平台集成服务, 通过集成把您的产品推广到各个平台去,利用粉丝营销的技术提高用户黏度, 扩大市场和提高产品口碑."
                },  {
                    thumbnail: "",
                    title: "电子商务网站建设",
                    info: "我们基于全球最大的开源电子商城系统 Magento为企业提供优质的电子商务网站建设业务，系统功能包括订单，产品分类，多币种管理，物流服务管理等功能.  不管您是服装厂家还是运动鞋厂家，甚至是酒店企业，都可以选择我们的电子商务网站建设方案；灵活和强大是我们的电子商务网站的服务优势。",
                    techKeyword: "PHP, CSS, HTML5, JAVASCRIPT, Magento, MySQL",
                },  {
                    thumbnail: "/misc/imgs/service1",
                    title: "网站建设",
                    info: "公司内部通过研发Fly CMS 内容管理系统 为企业网站建设提供优质的解决方案，不管是网站设计阶段，还是网站研发阶段，整个网站研发过程我们都会投入百分之一百的精力让您的网站与众不同和出彩。我们还可以为客户开发基于 Drupal 的内容网站，这样不管您网站有多复杂，内容多样，我们都可以让您应付自如.",
                    techKeyword: "PHP, CSS3, HTML5, Angular.js , MySQL, Drupal, Yii Framework",
                }, {
                    thumbnail: "",
                    title: "创意设计",
                    info: "我们的设计师总是能在各种细节中找到创意灵感，设计总是简洁，大气.  我们不喜欢复杂，我们崇尚简单，我们相信简单需要智慧.创意设计服务包括企业AI, 企业Logo, 创意网站设计, 企业海报设计，企业日历设计，企业T-shirt设计.",
                }];
	});