'use strict';

describe('Directive: confirmPassword', function () {

  // load the directive's module
  beforeEach(module('frontGeekApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<confirm-password></confirm-password>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the confirmPassword directive');
  }));
});
