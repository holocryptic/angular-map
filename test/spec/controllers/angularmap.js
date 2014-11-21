'use strict';

describe('Controller: AngularmapCtrl', function () {

  // load the controller's module
  beforeEach(module('projectsApp'));

  var AngularmapCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AngularmapCtrl = $controller('AngularmapCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
