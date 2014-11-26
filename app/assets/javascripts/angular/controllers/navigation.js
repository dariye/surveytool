'use strict';

app.controller('NavigationCtrl', ['$scope', '$state', '$location', '$rootScope', function ($scope, $state, $location, $rootScope, Questions) {


  $scope.state = $state;

  $scope.isAdmin = function(state) {
    return $state.is(state);
  }
  $scope.isActive = function (state) {
    return $state.includes(state);
  };

  // $scope.goto = function(state) {
  //   if (($rootScope.progressTracker.indexOf(state) >= 0) && ($rootScope.progressTracker.indexOf(state) < Questions.length)) {
  //     return;
  //   }
  //   else {
  //     $state.go(state);
  //   }
  // };

}]);
