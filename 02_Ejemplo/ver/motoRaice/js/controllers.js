'use strict';

/* Controllers */

var motoAppControllers = angular.module('motoAppControllers', []);

//Inyectamos el servicio Moto creaado en services JS, que nos permite extraer los vehiculos del proyecto
motoAppControllers.controller('MotosListCtrl', ['$scope', 'Moto', '$http',
  	function($scope, Moto, $http) {
    	/*Extraemos nuestros vehiculos desde moto.json*/
  		$http.get('data/motos.json').success(function(data) {
    		$scope.motos = data;
  		});
  	}]);

motoAppControllers.controller('MotoDetailCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    $scope.motoId = $routeParams.motoId;
  }]);