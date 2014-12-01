'use strict';

app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', 'AnalyticsProvider',
  function ($stateProvider, $urlRouterProvider, $locationProvider, AnalyticsProvider) {
    $stateProvider
      .state('signin', {
        url: '/sign_in',
        templateUrl: 'admin/new.html',
        controller: 'AdminSessionsCtrl'
      })
      .state('signup', {
        url: '/sign_up',
        templateUrl: 'admin/registration.html',
        controller: 'AdminRegistrationsCtrl',
        resolve: {
          auth: ['$auth', function ($auth) {
            return $auth.validateUser();
          }]
        }
      })
      .state('admin', {
        url: '/admin',
        abstract: true,
        template: '<ui-view/>',
        resolve: {
          auth: ['$auth', function ($auth) {
            return $auth.validateUser();
          }]
        }
      })
      .state('admin.dashboard', {
        url: '/dashboard',
        templateUrl: 'admin/index.html',
        controller: 'AdminSessionsCtrl'
      })
      .state('demo', {
        url: '/demo',
        abstract: true,
        templateUrl: 'demo.html',
      })
        .state('demo.one', {
          url: '',
          templateUrl: 'partials/1.html',
          controller: 'UsersCtrl'
        })
        .state('demo.two', {
          url: '',
          templateUrl: 'partials/2.html',
          controller: 'UsersCtrl'
        })
        .state('demo.three', {
          url: '',
          templateUrl: 'partials/3.html',
          controller: 'UsersCtrl'
        })
        .state('demo.four', {
          url: '',
          templateUrl: 'partials/4.html',
          controller: 'UsersCtrl'
        })
        .state('demo.five', {
          url: '',
          templateUrl: 'partials/5.html',
          controller: 'UsersCtrl'
        })
        .state('demo.six', {
          url: '',
          templateUrl: 'partials/6.html',
          controller: 'UsersCtrl'
        })
        .state('demo.seven', {
          url: '',
          templateUrl: 'partials/7.html',
          controller: 'UsersCtrl'
        })
        .state('demo.end', {
          url: '',
          templateUrl: 'partials/end.html',
          controller: 'UsersCtrl'
        });

      // default fall back route
      $urlRouterProvider.otherwise('/demo');



      // enable HTML5 Mode for SEO
      $locationProvider.html5Mode(true);


      // https://github.com/luisfarzati/angulartics
      // https://github.com/revolunet/angular-google-analytics


      // Anaytics
      AnalyticsProvider.setAccount('UA-28227468-4');
      // Use display features plugin
      AnalyticsProvider.useDisplayFeatures(true);
      // track all routes (or not)
      AnalyticsProvider.trackPages(true);
      // Use analytics.js instead of ga.js
      AnalyticsProvider.useAnalytics(true);
      // Ignore first page view... helpful when using hashes and whenever your bounce rate looks obscenely low.
      AnalyticsProvider.ignoreFirstPageLoad(true);
      // change page event name
      AnalyticsProvider.setPageEvent('$stateChangeSuccess');
      // Enable enhanced link attribution module for analytics.js or ga.js
      AnalyticsProvider.useEnhancedLinkAttribution(true);
}]);


app.run(['$rootScope', '$stateParams', '$state', '$location', '$window', '$timeout', 'Questions', 'Analytics',
  function ($rootScope, $stateParams, $state, $location, $window, $timeout, Questions, Analytics) {
    //analytics
    Analytics.pageView();

    $rootScope.$on('auth:login-success', function() {
      $state.go('admin.dashboard');
    });
    $rootScope.$on('auth:login-error', function() {
      $state.go('signin');
    });
    $rootScope.$on('auth:logout-success', function() {
      $state.go('signin');
    });

    // $rootScope.$on('auth:login-error', function() {
    //   $state.go('signin');
    // });

    // $rootScope.$on('auth:login-error', function() {
    //   $state.go('signin');
    // });

    // http://codepen.io/mike360/pen/xjFIJ
    $rootScope.$on('$routeChangeSuccess', function () {
      $timeout(function () {
        $window.scrollTo(0,0);
        $rootScope.$apply();
      }, 0);
    });

    $rootScope.$on('$stateChangeStart',
      function(){
        $timeout(function () {
          $window.scrollTo(0,0)
          $rootScope.$apply();
        }, 300);
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