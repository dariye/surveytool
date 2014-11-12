'use strict';

app.controller('NavigationCtrl', ['$scope', '$state', '$location', function ($scope, $state, $location) {
  $scope.isActive = function (state) {
    return $state.includes(state);
  };
}]);
