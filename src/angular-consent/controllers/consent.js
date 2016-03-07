(function (angular) {

  angular
    .module('angularConsent.controllers')
    .controller('angularConsent.ConsentController', ConsentController);

  function ConsentController($cookies, $attrs){

    this.getCookieKey = function(){
      return 'angular-consent.' + ($attrs.consent || 'global');
    };

    this.getCookieValue = function(){
      try {
        return $cookies.get(this.getCookieKey())
      } catch (e) {
        if (e instanceof TypeError){
          return $cookies[this.getCookieKey()];
        }
      }
    };

    this.setCookieValue = function(value){
      try {
        $cookies.put(this.getCookieKey(), value)
      } catch (e) {
        if (e instanceof TypeError){
          $cookies[this.getCookieKey()] = value ;
        }
      }
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
      try {
        $cookies.remove(this.getCookieKey())
      } catch (e) {
        if (e instanceof TypeError){
          delete $cookies[this.getCookieKey()];
        }
      }
    };

    this.agree = function(){
      this.setCookieValue(Date.now());
    };
  }

  ConsentController.$inject = ['$cookies', '$attrs'];

})(angular);
