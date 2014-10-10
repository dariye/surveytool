app.controller('UserCtrl', ['$scope', 'User', function ($scope, User) {
  $scope.users = User.all();

  // $scope.newUserFullname;
  // $scope.newUserEmail;

  $scope.createUser = function () {
    var attr = {};
    fullname = $scope.newUserFullname.split(" ");
    attr.firstname = fullname.shift();
    attr.lastname = fullname.shift() || "";
    attr.email = $scope.newUserEmail;

    var newUser = User.create(attr);
    $scope.users.push(newUser);

    $scope.newUserFullname = "";
    $scope.newUserEmail = "";
  };

  $scope.deleteUser = function(id, idx) {
    $scope.users.splice(idx, 1);
    return User.delete(id);
  };
}]);