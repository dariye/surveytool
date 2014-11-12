'use strict';

app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $locationProvider) {
  $stateProvider
    .state('home', {
      url: '/dashboard',
      templateUrl: 'home.html'
    })

    .state('demo', {
      url: '/demo',
      abstract: true,
      templateUrl: 'demo.html',
      controller: 'UserCtrl'
    })
    .state('demo.one', {
      url: '',
      templateUrl: 'partials/1.html'
    })
    .state('demo.two', {
      url: '',
      templateUrl: 'partials/2.html'
    })
    .state('demo.three', {
      url: '',
      templateUrl: 'partials/3.html'
    })
    .state('demo.four', {
      url: '',
      templateUrl: 'partials/4.html'
    })
    .state('demo.five', {
      url: '',
      templateUrl: 'partials/5.html'
    })
    .state('demo.six', {
      url: '',
      templateUrl: 'partials/6.html'
    })
    .state('demo.end', {
      url: '',
      templateUrl: 'partials/end.html'
    });

    // default fall back route
    $urlRouterProvider.otherwise('/demo');

    // enable HTML5 Mode for SEO
    $locationProvider.html5Mode(true);
}]);


app.run(['$rootScope', '$stateParams', '$state', '$location', '$window', '$timeout',
  function ($rootScope, $stateParams, $state, $location, $window, $timeout) {
    // $rootScope.$state = $state;
    // $rootScope.$stateParams = $stateParams;

    // $rootScope.go = function (state, pageAnimationClass) {

    //   $rootScope.pageAnimationClass = pageAnimationClass;

    //   if (state === 'back' ) {
    //     $window.history.back();
    //   }
    //   else if (state === 'forward') {
    //     $window.history.forward();
    //   }
    //   else {
    //     $state.go(state);
    //   }
    // };

    http://codepen.io/mike360/pen/xjFIJ
    $rootScope.$on('$routeChangeSuccess', function () {
      $timeout(function () {
        $window.scrollTo(0,0);
      }, 500);
    });

    // Global counter
    $rootScope.counter = 0;

    // Change routes
    $rootScope.go = function (state) {
      $state.go(state);
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


}]);