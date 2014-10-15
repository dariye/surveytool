'use strict';

app.directive('resize', ['$window', function ($window) {
    return function (scope, element) {
      var w = angular.element($window);
      scope.getWindowDimensions = function () {
        return { 'h': w.height(), 'w': w.width() };
      };
      scope.$watch(scope.getWindowDimensions,
        function (newValue, oldValue) {
          scope.windowHeight = newValue.h;
          scope.windowWidth = newValue.w;

          scope.resizePageContainer = function () {
            return {
              'height' : (newValue.h - 70) + 'px',
              'width'  : newValue.w + 'px'
            }
          };
        }, true);

      w.bind('resize', function () {
        scope.$apply();
      });
    };
}]);