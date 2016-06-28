'use strict';

angular
  .module('psFramework')
  .directive('psFramework', psFramework);

/* @ngInject */
function psFramework() {
  var directive = {
    transclude: true,
    controller: 'psFrameworkController',
    templateUrl: 'ext-modules/psFramework/psFrameworkTemplate.html',
    scope: {
      title: '@',
      subtitle: '@',
      iconFile: '@'
    }
  };
  return directive;

}


