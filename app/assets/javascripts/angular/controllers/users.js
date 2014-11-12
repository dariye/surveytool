'use strict';

app.controller('UserCtrl', ['$scope', '$location', 'User', 'Questions', '$rootScope', 'UserResponse',
  function ($scope, $location, User, Questions, $rootScope, UserResponse) {

    // Pre-defined Questions
    $scope.questions = Questions;

    $scope.formData = {};


    $scope.submitAnswer = function (state) {

      $rootScope.go(state);

    };


    $scope.users = User.all();

    $scope.submitResponse = function () {
      var attr = {};

      attr.firstname = $scope.firstname;
      attr.lastname = $scope.lastname;
      attr.email = $scope.email;

      attr.response = $scope.formData;

      console.log(attr);

      var newUser = User.create(attr);

      $scope.users.push(newUser);

      $rootScope.go('demo.end');
    };

    $scope.deleteUser = function(id, idx) {
      $scope.users.splice(idx, 1);
      return User.delete(id);
    };

}]);