'use strict';

app.controller('NavigationCtrl', ['$scope', '$location', function ($scope, $location) {
  $scope.isActive = function (location) {
    return $location.path().indexOf(location) == 0;
  };
}]);
