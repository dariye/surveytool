'use strict';

app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $locationProvider) {
  $stateProvider
    .state('home', {
      url: '/dashboard',
      templateUrl: 'home.html',
      controller: 'UserCtrl'
    })

    .state('demo', {
      url: '/demo',
      abstract: true,
      templateUrl: 'demo.html',
    })
    .state('demo.one', {
      url: '',
      templateUrl: 'partials/1.html',
      controller: 'UserCtrl'
    })
    .state('demo.two', {
      url: '',
      templateUrl: 'partials/2.html',
      controller: 'UserCtrl'
    })
    .state('demo.three', {
      url: '',
      templateUrl: 'partials/3.html',
      controller: 'UserCtrl'
    })
    .state('demo.four', {
      url: '',
      templateUrl: 'partials/4.html',
      controller: 'UserCtrl'
    })
    .state('demo.five', {
      url: '',
      templateUrl: 'partials/5.html',
      controller: 'UserCtrl'
    })
    .state('demo.six', {
      url: '',
      templateUrl: 'partials/6.html',
      controller: 'UserCtrl'
    })
    .state('demo.end', {
      url: '',
      templateUrl: 'partials/end.html',
      controller: 'UserCtrl'
    });

    // default fall back route
    $urlRouterProvider.otherwise('/demo');

    // enable HTML5 Mode for SEO
    $locationProvider.html5Mode(true);
}]);


app.run(['$rootScope', '$stateParams', '$state', '$location', '$window', '$timeout', 'Questions',
  function ($rootScope, $stateParams, $state, $location, $window, $timeout, Questions) {
    http://codepen.io/mike360/pen/xjFIJ

    $rootScope.$on('$routeChangeSuccess', function () {
      $timeout(function () {
        $window.scrollTo(0,0);
      }, 1000);
    });

    // Global counter
    $rootScope.counter = 0;

    // Change routes
    $rootScope.go = function (state) {
      if (($rootScope.progressTracker.indexOf(state) >= 0) && ($rootScope.progressTracker.indexOf(state) < Questions.length)) {
        return;
      }
      else {
        $state.go(state);
      }
    };

    // Page Resize
    $rootScope.getHeight = function () {
      return $window.innerHeight;
    };

    $rootScope.$watch(function ($rootScope) {
      return $rootScope.getHeight();
    }, true);

    angular.element($window).bind('getHeight', function() {
      $rootScope.$apply();
    });

    // Progress tracker
    $rootScope.progressTracker = [];

}]);