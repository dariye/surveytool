// Angular Rails Template
// source: app/assets/templates/partials/3.html.haml

angular.module("templates").run(["$templateCache", function($templateCache) {
  $templateCache.put("partials/3.html", "<div class='page green'>\n  <div class='text-center'>\n    <h1 class='demo-bold-txt'>Lorem.Habuit.Suo.</h1>\n    <h4 ng-model='questions'>\n      {{ questions[2] }}\n    </h4>\n    <div class='option-container'>\n      <label class='blackshade-text round-btn yellow' for='no' ng-click=\"addResponse('demo.four','No')\">\n        No\n      </label>\n      <input id='no' ng-model='answer' type='radio' value='No'>\n      <label class='white-text round-btn light-green' for='yes' ng-click=\"addResponse('demo.four','Yes')\">\n        Yes\n      </label>\n      <input id='yes' ng-model='answer' type='radio' value='Yes'>\n    </div>\n  </div>\n</div>")
}]);

