'use strict';

/**
 * @ngdoc function
 * @name rtjFrontApp.controller:PlanCtrl
 * @description
 * # PlanCtrl
 * Controller of the rtjFrontApp
 */
angular.module('rtjFrontApp').controller('DateRequestCtrl',
  ['$scope', '$http', 'API', function ($scope, $http, api) {

    $scope.submit = function() {
      // console.log($scope.date_request.loc);
      // console.log($scope);
      // console.log($scope.date_request);

      // $http.post(api.base + '/date_requests/create.json', $scope.date_request).then(function(resp){
      //   console.log(resp);
      // });
      // $http({
      //   method: "POST",
      //   url: api.base + "/date_requests/create.json",
      //   data: { test : 123 },
      //   // withCredentials: true,
      //   headers : { 'Content-Type': 'application/json; charset=utf-8' }
      // }).then(function(resp){
      //   console.log(resp);
      // });
      var app = 'AirFare';
      var d1 = new Date();
      var d2 = new Date();

      $http({
      url: api.base + "/date_requests/create.json",
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: {application: app, from: d1, to: d2}
      });
    };

  }]);
