// Angular Rails Template
// source: app/assets/templates/partials/5.html.haml

angular.module("templates").run(["$templateCache", function($templateCache) {
  $templateCache.put("partials/5.html", "<div class='page'>\n  <div class='demo-section whitesmoke' ng-style='resizePageContainer()'>\n    <div class='center-block text-center'>\n      <span class='icon-mobile blue-text'></span>\n      <h1 class='demo-bold-txt blackshade-text'>Your Pocket Fundraising Tool</h1>\n      <h4 class='blackshade-text'>\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque chaere, municipem potuimus facimus intellegere diuturnitatem meam erimus ignavia cognitionis momenti, placeat diligant theophrasti capti athenis populo videtis quas persius, detracto.\n      </h4>\n    </div>\n  </div>\n  <div class='demo-section blue' ng-style='resizePageContainer()' resize>\n    <a class='arrow-wrap text-center' du-smooth-scroll href='#section-2' id='section-2'>\n      <span class='glyphicon glyphicon-chevron-down arrow'></span>\n    </a>\n    <div class='center-block text-center'>\n      <div class='col-md-5'>\n        <img alt=\"White Mobile\" class=\"img-responsive\" src=\"/assets/mobile_white.png\" />\n      </div>\n      <div class='col-md-7'>\n        <h1 class='demo-bold-text'>Fundraise Anywere, At Anytime.</h1>\n        <h4>Lorem.Fortibus.Dissensio.</h4>\n      </div>\n    </div>\n  </div>\n  <div class='demo-section whitesmoke' ng-style='resizePageContainer()' resize>\n    <div class='center-block text-center'>\n      <div class='col-md-7'>\n        <img alt=\"Black Mobile\" class=\"img-responsive\" src=\"/assets/mobile_black.png\" />\n      </div>\n      <div class='col-md-5'>\n        <h2 class='demo-bold-txt blue-text'>Quick Transactions</h2>\n        <h4 class='blackshade-text'>Lorem.Fortibus.Dissensio.</h4>\n      </div>\n    </div>\n  </div>\n  <div class='demo-section cyan' ng-style='resizePageContainer()' resize>\n    <div class='center-block text-center'>\n      <iframe allowfullscreen frameborder='0' height='381' mozallowfullscreen src='//player.vimeo.com/video/54294990' webkitallowfullscreen width='600'></iframe>\n      <p>\n        <a href='http://vimeo.com/54294990'>WeDidIt: Expert Crowdfunding Tools for Nonprofits</a>\n        from\n        <a href='http://vimeo.com/wediditnyc'>WeDidIt</a>\n        on\n        <a href='https://vimeo.com'>Vimeo</a>\n      </p>\n      <a class='demo-btn whitesmoke blue-text' ui-sref='demo.six'>Show Me a Donation Page</a>\n    </div>\n  </div>\n</div>")
}]);

