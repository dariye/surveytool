'use strict';

app.controller('AdminSessionsCtrl', ['$scope', '$auth', '$state', 'User', 'Questions',
  function ($scope, $auth, $state, User, Questions) {

    $scope.questions = Questions;
    $scope.users = User.all();

    console.log($scope.users);
    console.log($scope.questions);

    $scope.$on('auth:login-error', function(ev, reason) {
      $scope.error = reason.errors[0];
    });

    $scope.loginForm = {};

    $scope.handleLoginBtnClick = function () {
      $auth.submitLogin($scope.loginForm);
    };

    $scope.handleSignOutBtnClick = function () {
      $auth.signOut()
        .then(function () {
          $state.go('signin');
        });
    };

}]);