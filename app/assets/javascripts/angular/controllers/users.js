'use strict';

app.controller('UsersCtrl', ['$scope', '$location', 'User', 'Questions', '$rootScope', 'responses','$state',
  function ($scope, $location, User, Questions, $rootScope, responses, $state) {

    // Scope State
    $scope.state = $state;

    $scope.questions = Questions;

    $scope.responses = responses.responses;

    $scope.answer = '';


    var qNo = $rootScope.counter;

    $scope.addResponse = function (state, answer) {
      $scope.responses.push({
        question: Questions[qNo],
        answer: answer
      });

      $rootScope.counter += 1;
      $rootScope.progressTracker.push($scope.state.current.name);
      $rootScope.go(state);
    };


    $scope.submitResponse = function () {

      $scope.$broadcast('show-errors-check-validity');
      if ($scope.userForm.$valid) {
        // save the user
        var attr = {};
        attr.firstname = $scope.firstname;
        attr.lastname = $scope.lastname;
        attr.email = $scope.email;

        attr.response = $scope.responses;


        var newUser = User.create(attr);

        User.all().push(newUser);

        $rootScope.go('demo.end');
      }

    };


    $scope.deleteUser = function(id, idx) {
      $scope.users.splice(idx, 1);
      return User.delete(id);
    };

}]);