'use strict';

angular.module('psMenu').directive('psMenuGroup', function () {
  return {
    require: '^psMenu',
    transclude: true,
    scope: {
      label: '@',
      icon: '@'
    },
    restrict: 'AE',
    templateUrl: 'ext-modules/psMenu/psMenuGroupTemplate.html',

    link: function (scope, el, attr, ctrl) {
      // scope.isActive = function(){
      //   return el === ctrl.getActiveElement();
      // };
      // el.on('click', function (evt) {
      //   evt.stopPropagation();
      //   evt.preventDefault();
      //   scope.$apply(function () {
      //     ctrl.setActiveElement(el);
      //     ctrl.setRoute(scope.route);
      //   });
      // })
    }
  };
});
