(function () {
  'use strict';

  angular
    .module('psFramework')
    .controller('psFrameworkController', psFrameworkController);

  psFrameworkController.$inject = ['$scope', '$window', '$timeout'];

  /* @ngInject */
  function psFrameworkController($scope, $window, $timeout) {
    var vm = this;
    vm.title = 'psFrameworkController';

    activate();

    ////////////////

    function activate() {
      $scope.$on('ps-menu-item-selected-event', function (evt, data) {
        $scope.routeString = data.route;
      });

      $scope.isMenuVisible = true;
      $scope.isMenuButtonVisible = true;

      $($window).on('resize.psFramework', function () {
        $scope.$apply(function () {
          checkWidth();
        })
      });

      $scope.$on('destroy', function () {
        $($window).off('resize.psFramework');
      });

      var checkWidth = function () {
        var width = Math.max($($window).innerWidth(), $window.innerWidth);
        $scope.isMenuVisible = (width >= 768);
        $scope.isMenuButtonVisible = !$scope.isMenuVisible;
      };

      $timeout(function () {
        checkWidth()
      }, 0);
    }
  }

})();

