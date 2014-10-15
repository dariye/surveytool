app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'home.html',
      controller: 'UserCtrl'
    })
   .when('/1', {
      templateUrl: 'partials/1.html',
      controller: 'UserCtrl'

    })
    .when('/2', {
      templateUrl: 'partials/2.html',
      controller: 'UserCtrl'

    })
    .when('/3', {
      templateUrl: 'partials/3.html',
      controller: 'UserCtrl'

    })
    .when('/4', {
      templateUrl: 'partials/4.html',
      controller: 'UserCtrl'

    })
    .when('/5', {
      templateUrl: 'partials/5.html',
      controller: 'UserCtrl'

    })
    .when('/6', {
      templateUrl: 'partials/6.html',
      controller: 'UserCtrl'

    })
    .when('/end', {
      templateUrl: 'partials/end.html',
      controller: 'UserCtrl'
    })
    .otherwise({redirectTo: '/1'});

  $locationProvider.html5Mode(true);
}]);


app.run(['$rootScope', '$location', '$window', '$timeout',
  function ($rootScope, $location, $window, $timeout) {
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
    $rootScope.go = function (path) {
      $location.path(path);
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