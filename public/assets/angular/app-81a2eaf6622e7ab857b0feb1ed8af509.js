"use strict";app.config(["$stateProvider","$urlRouterProvider","$locationProvider",function($stateProvider,$urlRouterProvider,$locationProvider){$stateProvider.state("home",{url:"/dashboard",templateUrl:"home.html",controller:"UserCtrl"}).state("demo",{url:"/demo","abstract":!0,templateUrl:"demo.html"}).state("demo.one",{url:"",templateUrl:"partials/1.html",controller:"UserCtrl"}).state("demo.two",{url:"",templateUrl:"partials/2.html",controller:"UserCtrl"}).state("demo.three",{url:"",templateUrl:"partials/3.html",controller:"UserCtrl"}).state("demo.four",{url:"",templateUrl:"partials/4.html",controller:"UserCtrl"}).state("demo.five",{url:"",templateUrl:"partials/5.html",controller:"UserCtrl"}).state("demo.six",{url:"",templateUrl:"partials/6.html",controller:"UserCtrl"}).state("demo.end",{url:"",templateUrl:"partials/end.html",controller:"UserCtrl"}),$urlRouterProvider.otherwise("/demo"),$locationProvider.html5Mode(!0)}]),app.run(["$rootScope","$stateParams","$state","$location","$window","$timeout","Questions",function($rootScope,$stateParams,$state,$location,$window,$timeout,Questions){$rootScope.$on("$routeChangeSuccess",function(){$timeout(function(){$window.scrollTo(0,0)},1e3)}),$rootScope.counter=0,$rootScope.go=function(state){$rootScope.progressTracker.indexOf(state)>=0&&$rootScope.progressTracker.indexOf(state)<Questions.length||$state.go(state)},$rootScope.getHeight=function(){return $window.innerHeight},$rootScope.$watch(function($rootScope){return $rootScope.getHeight()},!0),angular.element($window).bind("getHeight",function(){$rootScope.$apply()}),$rootScope.progressTracker=[]}]);