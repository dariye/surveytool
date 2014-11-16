'use strict';

app.controller('UserCtrl', ['$scope', '$location', 'User', 'Questions', '$rootScope', 'responses',
  function ($scope, $location, User, Questions, $rootScope, responses) {

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
      $rootScope.go(state);
    };


    console.log($scope.responses);

    $scope.users = User.all();

    $scope.submitResponse = function () {

      if ($scope.firstname == '' || $scope.email == '') {
        return;
      }

      var attr = {};

      attr.firstname = $scope.firstname;
      attr.lastname = $scope.lastname;
      attr.email = $scope.email;

      attr.response = $scope.responses;

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