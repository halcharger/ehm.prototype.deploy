"use strict";angular.module("EHM",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","ui.bootstrap"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/dashboard.html"}).when("/deliveries",{templateUrl:"views/deliveries.html",controller:"DeliveriesController"}).when("/returns",{templateUrl:"views/returns.html",controller:"ReturnsController"}).when("/projects",{templateUrl:"views/projects.html"}).when("/reporting",{templateUrl:"views/reporting.html"}).when("/editdelivery",{templateUrl:"views/editdelivery.html"}).when("/editreturn",{templateUrl:"views/editreturn.html"}).when("/suppliers",{templateUrl:"views/suppliers.html"}).when("/products",{templateUrl:"views/products.html"}).when("/deletedelivery",{templateUrl:"views/deletedelivery.html"}).when("/deletereturn",{templateUrl:"views/deletereturn.html"}).when("/deletequote",{templateUrl:"views/deletequote.html"}).when("/planning",{templateUrl:"views/planning.html",controller:"PlanningController"}).when("/editquote",{templateUrl:"views/editquote.html"}).when("/sitebalancereportsetup",{templateUrl:"views/sitebalancereportsetup.html"}).when("/configureproject",{templateUrl:"views/project.html"}).otherwise({redirectTo:"/"})}]),angular.module("EHM").controller("DeliveriesController",["$scope","$modal","$log",function(a,b,c){a.items=["item1","item2","item3"],a.open=function(d){var e=b.open({templateUrl:"viewMovementModalContent.html",controller:"ModalInstanceController",size:d,resolve:{items:function(){return a.items}}});e.result.then(function(b){a.selected=b},function(){c.info("Modal dismissed at: "+new Date)})}}]),angular.module("EHM").controller("ReturnsController",["$scope","$modal","$log",function(a,b,c){a.items=["item1","item2","item3"],a.open=function(d){var e=b.open({templateUrl:"viewReturnModalContent.html",controller:"ModalInstanceController",size:d,resolve:{items:function(){return a.items}}});e.result.then(function(b){a.selected=b},function(){c.info("Modal dismissed at: "+new Date)})}}]),angular.module("EHM").controller("PlanningController",["$scope","$modal","$log",function(a,b,c){a.items=["item1","item2","item3"],a.open=function(d){var e=b.open({templateUrl:"viewQuoteModalContent.html",controller:"ModalInstanceController",size:d,resolve:{items:function(){return a.items}}});e.result.then(function(b){a.selected=b},function(){c.info("Modal dismissed at: "+new Date)})}}]),angular.module("EHM").controller("ModalInstanceController",["$scope","$modalInstance","items",function(a,b,c){a.items=c,a.selected={item:a.items[0]},a.ok=function(){b.close(a.selected.item)},a.cancel=function(){b.dismiss("cancel")}}]);