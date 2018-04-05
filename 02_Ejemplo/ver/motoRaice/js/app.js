'use strict';

/* App Module */
/* se crea el modulo del aplicativo*/
var motoApp = angular.module('motoApp', [
	'ngRoute',
  'motoAppControllers',
  'motoAppServices' // se agrega el servicio creado en services.js
]);


//Se agrega la configuracion de rutas!!
motoApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/motos', {
        templateUrl: 'partials/moto-list.html',
        controller: 'MotosListCtrl'
      }).
      when('/motos/:motoId', {
        templateUrl: 'partials/moto-detail.html',
        controller: 'MotosDetailCtrl'
      }).
      otherwise({
        redirectTo: '/motos'
      });
  }]);