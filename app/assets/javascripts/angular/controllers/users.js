'use strict';

app.controller('UserCtrl', ['$scope', '$location', 'User', 'Questions', '$rootScope', 'responses','$state',
  function ($scope, $location, User, Questions, $rootScope, responses, $state) {

    // Scope State
    $scope.state = $state;

    // Pre-defined Questions
    $scope.questions = Questions;

    $scope.responses = responses.responses;

    $scope.answer = '';


    var qNo = $rootScope.counter;

    $scope.addResponse = function (state, answer) {
      $scope.responses.push({
        question: $scope.questions[qNo],
        answer: answer
      });

      $rootScope.counter += 1;
      $rootScope.progressTracker.push($scope.state.current.name);
      $rootScope.go(state);
    };

    // DEBUG
    console.log($scope.responses);

    $scope.users = User.all();

    $scope.submitResponse = function () {

      $scope.$broadcast('show-errors-check-validity');
      if ($scope.userForm.$valid) {
        // save the user
        var attr = {};
        attr.firstname = $scope.firstname;
        attr.lastname = $scope.lastname;
        attr.email = $scope.email;

        attr.response = $scope.responses;

        // DEBUG
        console.log(attr);

        // var newUser = User.create(attr);

        //$scope.users.push(newUser);

        $rootScope.go('demo.end');
      }

      // Form Validation

      // if (($scope.firstname === '') || ($scope.firstname === undefined)) {
      //   if (($scope.email === '') || ($scope.email === undefined)) {
      //     $scope.vEmail = true;
      //   }
      //   $scope.vFirstname = true;
      //   return;
      // }
      // if (($scope.email === '') || ($scope.email === undefined)) {
      //   if (($scope.firstname === '') || ($scope.firstname === undefined)) {
      //     $scope.vFirstname = true;
      //   }
      //   $scope.vEmail = true;
      //   return;
      // }


    };


    $scope.deleteUser = function(id, idx) {
      $scope.users.splice(idx, 1);
      return User.delete(id);
    };

}]);