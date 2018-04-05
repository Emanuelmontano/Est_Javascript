'use strict';

/* Services */
/* Se aplica el uso de servicios*/
var motoAppServices = angular.module('motoAppServices', []);

//Se declara el servicio Motos! con una sola propiedad
motoAppServices.factory('Moto', [
  function(){
    return {
    	notify: function(msg){
    		alert(msg);
    	},
    	getMotos: function(){
    		var motos = [{
				        "name": "NEW QASHQAI", 
				        "snippet": "MADE WITH YOU IN MIND TO GIVE YOU THE HIGHEST QUALITY"
				    },
				    {
				       
				        "name": "Veloster", 
				        "snippet": "SPORTY LIKE A COUPE. ROOMY LIKE A SEDAN."
				    },
				    {
				        "name": "Navara", 
				        "snippet": "The Navara is all about freedom including freedom of choice."
				    }];

		    return motos;
    	}
    }
  }]);
