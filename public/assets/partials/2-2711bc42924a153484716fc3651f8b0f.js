// Angular Rails Template
// source: app/assets/templates/partials/2.html.haml

angular.module("templates").run(["$templateCache", function($templateCache) {
  $templateCache.put("partials/2.html", "<div class='page whitesmoke'>\n  <div class='text-center'>\n    <h1 class='blackshade-text demo-bold-text'>Donating</h1>\n    <h4 class='blackshade-text' ng-model='questions'>\n      {{ questions[1] }}\n    </h4>\n    <div class='option-container'>\n      <label class='whiteshade-text round-btn white' for='no' ng-click=\"addResponse('demo.three','No')\">\n        No\n      </label>\n      <input id='no' ng-model='answer' type='radio' value='No'>\n      <label class='white-text round-btn blue' for='yes' ng-click=\"addResponse('demo.three','Yes')\">\n        Yes\n      </label>\n      <input id='yes' ng-model='answer' type='radio' value='Yes'>\n    </div>\n  </div>\n</div>")
}]);

