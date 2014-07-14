'use strict';

/**
 * @ngdoc function
 * @name rtjFrontApp.controller:PlanCtrl
 * @description
 * # PlanCtrl
 * Controller of the rtjFrontApp
 */
angular.module('rtjFrontApp').controller('PlanCtrl',
  ['$scope', '$http', 'API', function ($scope, $http, api) {

    $http.get(api.base + '/plans.json').then(function(resp){
      console.log(resp);
    });

  }]);
