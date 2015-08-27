'use strict';

describe('', function() {

  var module;
  var dependencies;
  dependencies = [];

  var hasModule = function(module) {
  return dependencies.indexOf(module) >= 0;
  };

  beforeEach(function() {

  // Get module
  module = angular.module('angularConsent');
  dependencies = module.requires;
  });

  it('should load config module', function() {
    expect(hasModule('angularConsent.config')).to.be.ok;
  });

  it('should load directives module', function() {
    expect(hasModule('angularConsent.directives')).to.be.ok;
  });

  it('should load controllers module', function() {
    expect(hasModule('angularConsent.controllers')).to.be.ok;
  });


});
