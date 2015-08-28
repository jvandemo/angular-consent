(function (angular) {

  angular
    .module('angularConsent.directives')
    .directive('consent', createDirectiveDDO);

  function createDirectiveDDO(){
    return {
      restrict: 'A',
      scope: true,
      controller: 'angularConsent.ConsentController',
      controllerAs: '$consent'
    };
  }

})(angular);
