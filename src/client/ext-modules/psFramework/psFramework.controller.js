(function () {
  'use strict';

  angular
    .module('psFramework')
    .controller('psFrameworkController', psFrameworkController);

  psFrameworkController.$inject = ['$rootScope', '$scope', '$window', '$timeout'];

  /* @ngInject */
  function psFrameworkController($rootScope, $scope, $window, $timeout) {
    var vm = this;
    vm.title = 'psFrameworkController';

    activate();

    ////////////////

    function activate() {
      $scope.isMenuVisible = true;
      $scope.isMenuButtonVisible = true;
      $scope.isMenuVertical = true;

      $scope.$on('ps-menu-item-selected-event', function (evt, data) {
        $scope.routeString = data.route;
        checkWidth();
        broadcastMenuState();
      });

      $scope.$on('ps-menu-orientation-changed-event', function (evt, data) {
        $scope.isMenuVertical = data.isMenuVertical;
      });

      $($window).on('resize.psFramework', function () {
        $scope.$apply(function () {
          checkWidth();
          broadcastMenuState();
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

      $scope.menuButtonClicked = function () {
        $scope.isMenuVisible = !$scope.isMenuVisible;
        broadcastMenuState();
        // $scope.$apply();
      };

      var broadcastMenuState = function () {
        $rootScope.$broadcast('ps-menu-show',
          {
            show: $scope.isMenuVisible
          });
      };

      $timeout(function () {
        checkWidth()
      }, 0);
    }
  }

})();

