'use strict';

/* Controllers */

var motoAppControllers = angular.module('motoAppControllers', []);

//Inyectamos el servicio Moto creaado en services JS, que nos permite extraer los vehiculos del proyecto
motoAppControllers.controller('MotosListCtrl', ['$scope', 'Moto',
  	function($scope, Moto) {
  		$scope.motos = Moto.query();
    	$scope.orderProp = 'model';
  	}]);

motoAppControllers.controller('MotosDetailCtrl', ['$scope', '$routeParams', 'Moto',
  function($scope, $routeParams, Moto) {
    
    $scope.moto = Moto.get({motoId: $routeParams.motoId}, function(moto) {
      $scope.mainImageUrl = moto.images[0];
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    }
  }]);