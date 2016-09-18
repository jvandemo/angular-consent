(function (angular) {

  angular
    .module('angularConsent.controllers')
    .controller('angularConsent.ConsentController', ConsentController);

  function ConsentController($cookies, $attrs, $scope){

    this.getCookieKey = function(){
      return 'angular-consent.' + ($attrs.consent || 'global');
    };

    this.getCookieOptions = function(){
      if(!$attrs.consentCookieOptions){
        var now = new Date();
        var expirationDate = new Date();
        expirationDate.setTime(+ now + (360 * 24 * 60 * 60 * 1000)); // 360 days
        return {
          expires: expirationDate.toGMTString()
        };
      }
      return $scope.$eval($attrs.consentCookieOptions);
    };

    this.getCookieValue = function(){
      try {
        return $cookies.get(this.getCookieKey());
      } catch (e) {
        if (e instanceof TypeError){
          return $cookies[this.getCookieKey()];
        }
      }
    };

    this.setCookieValue = function(value){
      try {
        return $cookies.put(this.getCookieKey(), value, this.getCookieOptions());
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
        $cookies.remove(this.getCookieKey());
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

  ConsentController.$inject = ['$cookies', '$attrs', '$scope'];

})(angular);
