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
  .config(function ($routeProvider, $httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common["X-Requested-With"];
    // delete $httpProvider.defaults.headers.post['Content-type'] 

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
      .when('/daterequests/new', {
        templateUrl: 'views/daterequests/new.html',
        controller: 'DateRequestCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .constant('API', {
    base : (window.location.host.match('localhost') ?
      'http://localhost:3000' : 'http://rtj-back.herokuapp.com')
  });
