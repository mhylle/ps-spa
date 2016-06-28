angular.module('app')
  .config(configuration)

configuration.$inject = ['$provide'];

/* @ngInject */
function configuration($provide) {
  $provide.decorator("$exceptionHandler", ["$delegate", function ($delegate) {
    return function (exception, cause) {
      $delegate(exception, cause);
      alert(exception.message);
    };
  }])
}
