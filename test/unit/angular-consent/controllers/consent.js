'use strict';

describe('angular-consent controller', function() {

  var $controller;
  var $cookies;
  var $scope;
  var $rootScope;
  var ctrl;

  beforeEach(module('angularConsent'));

  beforeEach(inject(function(_$controller_, _$cookies_, _$rootScope_){
    $controller = _$controller_;
    $cookies = _$cookies_;
    $rootScope = _$rootScope_;
    $scope = $rootScope.$new();
    ctrl = $controller('angularConsent.ConsentController', {
      $attrs: {},
      $scope: $scope
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
