(function (angular) {

  // Create all modules and define dependencies to make sure they exist
  // and are loaded in the correct order to satisfy dependency injection
  // before all nested files are concatenated by Gulp

  // Config
  angular.module('angularConsent.config', [])
      .value('angularConsent.config', {
          debug: true
      });

  // Modules
  angular.module('angularConsent.directives', []);
  angular.module('angularConsent.controllers', []);
  angular.module('angularConsent',
      [
          'angularConsent.config',
          'angularConsent.directives',
          'angularConsent.controllers',
          'ngCookies'
      ]);

})(angular);

(function (angular) {

  angular
    .module('angularConsent.controllers')
    .controller('angularConsent.ConsentController', ConsentController);

  function ConsentController($cookies, $attrs){

    this.getCookieKey = function(){
      return 'angular-consent.' + ($attrs.consent || 'global');
    };

    this.getCookieValue = function(){
      return $cookies.get(this.getCookieKey());
    };

    this.setCookieValue = function(value){
      return $cookies.put(this.getCookieKey(), value);
    };

    this.hasAlreadyAgreed = function(){
      if(this.getCookieValue()){
        return true;
      }
      return false;
    };

    this.hasNotAgreedYet = function(){
      return !this.hasAlreadyAgreed();
    };

    this.reset = function(){
      $cookies.remove(this.getCookieKey());
    };

    this.agree = function(){
      this.setCookieValue(Date.now());
    };
  }

  ConsentController.$inject = ['$cookies', '$attrs'];

})(angular);

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
