'use strict';

app.directive('arrow', ['$window', function ($window) {
    return function (scope, element) {
      angular.element($window).bind("scroll", function() {
        var w = angular.element($window);
        var topWindow = w.scrollTop();
        var topWindow = topWindow * 1.5;

        var windowHeight = w.height();

        var position = topWindow / windowHeight;
        position = 1 - position;

        $('.demo-section .arrow-wrap').css('opacity', position);

        w.bind('arrow', function () {
          scope.$apply();
        });
      });
    };
}]);
