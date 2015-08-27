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
