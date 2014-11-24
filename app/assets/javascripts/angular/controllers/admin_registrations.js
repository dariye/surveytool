'use strict';

app.controller('AdminRegistrationsCtrl', ['$scope', '$auth', function ($scope, $auth) {

  $scope.$on('auth:registration-email-error', function(ev, reason) {
    $scope.errors = reason.errors[0];
  });

  $scope.handleRegBtnClick = function () {
    $auth.submitRegistration($scope.registrationForm)
      .then(function() {
        $auth.submitLogin({
          email: $scope.registrationForm.email,
          password: $scope.registrationForm.password
        });
      });
  };

}]);

