'use strict';

app.controller('UserCtrl', ['$scope', '$location', 'User', 'Questions', '$rootScope',
  function ($scope, $location, User, Questions, $rootScope) {
    // User response
    $scope.answer;

    $scope.feedback = {};

    // Pre-defined Questions
    $scope.questions = Questions;


    // Question and Answer store
    // var qNa = {};

    // var dFeedback = [];

    // $scope.addFeedback = function () {
    //   var q = Questions[$rootScope.counter];
    //   $rootScope.counter = $rootScope.counter + 1;

    //   qNa[q] = $scope.answer;
    //   dFeedback.push(qNa);

    //   console.log(qNa);
    //   console.log(dFeedback);

    // }

    $scope.users = User.all();

    $scope.createUser = function () {
      var attr = {};
      // var feedback = [];
      // feedback.push(qNa);

      var fullname = $scope.newUserFullname.split(" ");
      attr.firstname = fullname.shift();
      attr.lastname = fullname.shift() || "";
      attr.email = $scope.newUserEmail;
      attr.feedback = $scope.feedback;

      console.log(attr.feedback);

      var newUser = User.create(attr);
      $scope.users.push(newUser);

      $location.path('/end');
    };

    $scope.deleteUser = function(id, idx) {
      $scope.users.splice(idx, 1);
      return User.delete(id);
    };

}]);