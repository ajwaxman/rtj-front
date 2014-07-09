'use strict';

/**
 * @ngdoc function
 * @name rtjFrontApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the rtjFrontApp
 */
angular.module('rtjFrontApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
