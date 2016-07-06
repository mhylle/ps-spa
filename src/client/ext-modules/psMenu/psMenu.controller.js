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
    activate();
    $scope.showMenu = true;
    $scope.isVertical = true;
    ////////////////

    function activate() {
      $scope.$on('ps-menu-show', function (evt, data) {
        $scope.showMenu = data.show;
      });
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

    this.toggleMenuOrientation = function () {
      $scope.isVertical = !$scope.isVertical;
      $rootScope.$broadcast('ps-menu-orientation-changed-event',
        {isMenuVertical: $scope.isVertical});
    }
  }

})();

