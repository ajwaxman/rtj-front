'use strict';

/**
 * @ngdoc function
 * @name rtjFrontApp.controller:PlanCtrl
 * @description
 * # PlanCtrl
 * Controller of the rtjFrontApp
 */
angular.module('rtjFrontApp').controller('PlanCtrl',
  ['$scope', '$http', function ($scope, $http) {

    $http.get('http://ip.jsontest.com/').then(function(resp){
      $("#json").text(resp.data.ip);
    });

    $http.get('http://localhost:3000/plans.json').then(function(resp){
      console.log(resp);
    })

  }]);
