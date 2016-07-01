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
      return $cookies.get(this.getCookieKey());
    };

    this.setCookieValue = function(value){
      return $cookies.put(this.getCookieKey(), value, this.getCookieOptions());
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

  ConsentController.$inject = ['$cookies', '$attrs', '$scope'];

})(angular);
