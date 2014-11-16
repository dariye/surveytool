"use strict";angular.module("ngSocial").directive("ngSocialGithubForks",function(){var options={counter:{url:"https://api.github.com/repos/{user}/{repository}?callback=JSON_CALLBACK",getNumber:function(data){return data.data.forks_count}},clickUrl:"https://github.com/{user}/{repository}/"};return{restrict:"C",require:"^?ngSocialButtons",scope:!0,replace:!0,transclude:!0,template:'<li>                     <a ng-href="{{ctrl.link(options)}}" target="_blank" class="ng-social-button">                         <span class="ng-social-icon"></span>                         <span class="ng-social-text" ng-transclude></span>                     </a>                     <span ng-show="count" class="ng-social-counter">{{ count }}</span>                    </li>',controller:function(){},link:function(scope,element,attrs,ctrl){element.addClass("ng-social-github ng-social-github-forks"),ctrl&&(options.urlOptions={user:attrs.user,repository:attrs.repository},scope.options=options,scope.ctrl=ctrl,ctrl.init(scope,element,options))}}});