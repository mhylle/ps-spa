(function () {
  'use strict';

  angular
    .module('psMenu')
    .controller('psMenuController', psMenuController);

  psMenuController.$inject = ['$rootScope', '$scope'];

  /* @ngInject */
  function psMenuController($rootScope, $scope) {
    var vm = this;
    vm.title = 'psMenuController';
    vm.activeElement = null;
    $scope.showMenu = true;
    $scope.isVertical = true;
    $scope.allowHorizontalToggle = true;

    activate();
    ////////////////

    function activate() {
      $scope.$on('ps-menu-show', function (evt, data) {
        $scope.showMenu = data.show;
        $scope.isVertical = data.isVertical;
        $scope.allowHorizontalToggle = data.allowHorizontalToggle;
      });

      angular.element(document).bind('click', function (e) {
        if ($scope.openMenuScope && !$scope.isVertical) {
          if ($(e.target).parent().hasClass('ps-selectable-item')) {
            // we clicked in the menu, so do not close it
            return;
          }
          $scope.$apply(function () {
            $scope.openMenuScope.closeMenu();
          });
          e.preventDefault();
          e.stopPropagation();
        }
      })
    }

    this.getActiveElement = function () {
      return vm.activeElement;
    };

    this.setActiveElement = function (el) {
      vm.activeElement = el;
    };

    this.setRoute = function (route) {
      $rootScope.$broadcast('ps-menu-item-selected-event',
        {route: route});
    };

    this.isVertical = function () {
      return $scope.isVertical;
    };

    this.setOpenMenuScope = function (scope) {
      $scope.openMenuScope = scope;
    };

    $scope.toggleMenuOrientation = function () {

      // close any open menu
      if ($scope.openMenuScope) {
        $scope.openMenuScope.closeMenu();
      }

      $scope.isVertical = !$scope.isVertical;
      $rootScope.$broadcast('ps-menu-orientation-changed-event',
        {isMenuVertical: $scope.isVertical});
    };
  }

})();

