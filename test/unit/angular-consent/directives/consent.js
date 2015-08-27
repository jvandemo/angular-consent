'use strict';

describe('angular-consent directive', function() {

  var $compile;
  var $rootScope;
  var $cookies;

  beforeEach(module('angularConsent'));

  beforeEach(inject(function(_$rootScope_, _$compile_, _$cookies_){
    $rootScope = _$rootScope_;
    $compile = _$compile_;
    $cookies = _$cookies_;
  }));

  it('should handle non-existing cookie correctly', function() {
    var markup = '<section consent="test">';
    markup += '<h1 ng-if="$consent.hasNotAgreedYet()">Not agreed yet</h1>';
    markup += '<h1 ng-if="$consent.hasAlreadyAgreed()">Already agreed</h1>';
    markup += '</section>';
    var $scope = $rootScope.$new();
    var element = $compile(markup)($scope);
    $rootScope.$digest();
    expect(element.html()).to.contain('Not agreed yet');
    expect(element.html()).to.not.contain('Already agreed');
  });

  it('should handle truthy value correctly', function() {
    $cookies.put('angular-consent.test', Date.now());
    var markup = '<section consent="test">';
    markup += '<h1 ng-if="$consent.hasNotAgreedYet()">Not agreed yet</h1>';
    markup += '<h1 ng-if="$consent.hasAlreadyAgreed()">Already agreed</h1>';
    markup += '</section>';
    var $scope = $rootScope.$new();
    var element = $compile(markup)($scope);
    $rootScope.$digest();
    expect(element.html()).to.not.contain('Not agreed yet');
    expect(element.html()).to.contain('Already agreed');
  });

  it('should handle empty value correctly', function() {
    $cookies.put('angular-consent.test', '');
    var markup = '<section consent="test">';
    markup += '<h1 ng-if="$consent.hasNotAgreedYet()">Not agreed yet</h1>';
    markup += '<h1 ng-if="$consent.hasAlreadyAgreed()">Already agreed</h1>';
    markup += '</section>';
    var $scope = $rootScope.$new();
    var element = $compile(markup)($scope);
    $rootScope.$digest();
    expect(element.html()).to.contain('Not agreed yet');
    expect(element.html()).to.not.contain('Already agreed');
  });

});
