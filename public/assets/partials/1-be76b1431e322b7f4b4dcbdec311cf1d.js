// Angular Rails Template
// source: app/assets/templates/partials/1.html.haml

angular.module("templates").run(["$templateCache", function($templateCache) {
  $templateCache.put("partials/1.html", "<div class='page lighter-blue' ng-style='resizePageContainer()' resize>\n  <div class='text-center'>\n    <h1 class='demo-bold-txt'>Let's Get Started.</h1>\n    <h4 ng-model='questions'>\n      {{ questions[0] }}\n    </h4>\n    <option-container ng-init='answer'>\n      <label class='blackshade-text round-btn yellow' for='no' ng-click=\"addResponse('demo.two','No')\">\n        No\n      </label>\n      <input id='no' ng-model='answer' type='radio' value='No'>\n      <label class='white-text round-btn light-blue' for='yes' ng-click=\"addResponse('demo.two','Yes')\">\n        Yes\n      </label>\n      <input id='yes' ng-model='answer' type='radio' value='Yes'>\n    </option-container>\n  </div>\n</div>")
}]);

