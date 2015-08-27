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
