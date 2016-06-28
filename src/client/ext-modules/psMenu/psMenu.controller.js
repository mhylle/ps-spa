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

    ////////////////

    function activate() {

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
  }

})();

