// Angular Rails Template
// source: app/assets/templates/partials/end.html.haml

angular.module("templates").run(["$templateCache", function($templateCache) {
  $templateCache.put("partials/end.html", "<div class='page whitesmoke'>\n  <div class='text-center'>\n    <h1 class='blackshade-text'>Thank you!</h1>\n    <ul data-description=\"'test2'\" data-image=\"'http://s3.mistinfo.com/32/d8/32d8eab76f4c242f665bda66b5edc6c5.jpg'\" data-title=\"'Fundraising Redefined'\" data-url=\"'http://wedid.it/demo'\" ng-social-buttons>\n      <li class='ng-social-facebook'>Facebook</li>\n      <li class='ng-social-twitter'>Twitter</li>\n    </ul>\n  </div>\n</div>")
}]);

