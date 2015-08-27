'use strict';

describe('angular-consent controller', function() {

  var $controller;
  var $cookies;
  var ctrl;

  beforeEach(module('angularConsent'));

  beforeEach(inject(function(_$controller_, _$cookies_){
    $controller = _$controller_;
    $cookies = _$cookies_;
    ctrl = $controller('angularConsent.ConsentController', {
      $attrs: {}
    });
  }));

  it('should exist', function() {
    expect(ctrl).to.be.an('object');
  });

  describe('#agree()', function(){

    it('should update cookie correctly', function() {
      ctrl.reset();
      expect(ctrl.getCookieValue()).to.not.exist;
      ctrl.agree();
      expect(ctrl.getCookieValue()).to.exist;
    });

  });

  describe('#reset()', function(){

    it('should update cookie correctly', function() {
      ctrl.reset();
      expect(ctrl.getCookieValue()).to.not.exist;
      ctrl.agree();
      expect(ctrl.getCookieValue()).to.exist;
      ctrl.reset();
      expect(ctrl.getCookieValue()).to.not.exist;
    });

  });


});
