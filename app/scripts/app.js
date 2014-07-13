'use strict';

/**
 * @ngdoc overview
 * @name rtjFrontApp
 * @description
 * # rtjFrontApp
 *
 * Main module of the application.
 */
angular
  .module('rtjFrontApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/plans', {
        templateUrl: 'views/plans.html',
        controller: 'PlanCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
