var tx1 = [];
var tx2 = [];
 $(document).ready(function () { 
 	RecuperarinformacionServicioTX1();
	RecuperarinformacionServicioTX2(putLongOnList);
	
});
function RecuperarinformacionServicioTX1() {
	
	$.when(getData("https://serviciosfacturacion.xm.com.co/XM.Portal.Indicadores/api/Transacciones/InformacionPreliminarTX1")).done(function( data, textStatus, jqXHR ) {
    		tx1 = data;
    		MarquesinaUno();
	}).fail(function(jqxhr, settings, exception ){
		var li = "<li class='marquee'>No hay datos de consulta</li>"
		$('#ContenidoMarquesinaUno').append(li);
		
	});
}


function RecuperarinformacionServicioTX2(callback) {
	$.when(getData("https://serviciosfacturacion.xm.com.co/XM.Portal.Indicadores/api/Transacciones/InformacionPreliminarTX2")).done(function( data, textStatus, jqXHR ) {
    		tx2 = data;
    		MarquesinaDos();
			callback();
	}).fail(function(jqxhr, settings, exception ){
		var li = "<li class='marquee'>No hay datos de consulta</li>"
		$('#ContenidoMarquesinaUno').append(li);
	
	});
}

function MarquesinaUno (){
	console.log("entro en MarquesinaUno");
	if(tx1.Indicadores.length > 0){
		moment.locale(); 
		var fecha = moment(tx1.Fecha).format('LL');
		$('#FechaTX1').append(fecha);	
		$.each(tx1.Indicadores,function(i,v){
				var estado = '';
				var nombre  = '';
				var valor = '';
				var li = "<li class='marquee'>" + nombre + " : " + valor + "</li>";
				if(v.ValorActual > v.ValorAnterior){
					estado = 'src="http://www.xm.com.co/Style Library/Images/greenArrow.png"';
				}else if(v.ValorActual == v.ValorAnterior){
					estado = 'src="http://www.xm.com.co/Style Library/Images/yellowArrow.png"';
				}else{
					estado =  'src="http://www.xm.com.co/Style Library/Images/redArrow.png"';
				}
				
				nombre  = v.Nombre;
				valor = v.ValorActual.toFixed(2) + " " + v.UnidadMedida;
				li = "<li class='marquee'>" + '<img ' + estado + '/>' + " " + nombre + " : " + valor + "</li>";

				$('#ContenidoMarquesinaUno').append(li);	
			});	
	}else{
		var li = "<li class='marquee'>Cargando datos...</li>"
		$('#ContenidoMarquesinaUno').append(li);
	}

};
function MarquesinaDos(data){
	if(tx2.Indicadores.length > 0){
		moment.locale(); 
		var fechaDos = moment(tx2.Fecha).format('LL');
 		$('#FechaTX2').append(fechaDos);	
		$.each(tx2.Indicadores,function(i,v){
			var estado = '';
			var nombre  = '';
			var valor = '';
			var li = "<li class='marquee'>" + nombre + " : " + valor + "</li>";
			if(v.ValorActual > v.ValorAnterior){
				estado = 'src="http://www.xm.com.co/Style Library/Images/greenArrow.png"';
			}else if(v.ValorActual == v.ValorAnterior){
				estado = 'src="http://www.xm.com.co/Style Library/Images/yellowArrow.png"';
			}else{
				estado =  'src="http://www.xm.com.co/Style Library/Images/redArrow.png"';
			}
			
			nombre  = v.Nombre;
			valor = v.ValorActual.toFixed(2) + " " + v.UnidadMedida;
			li = "<li class='marquee'>" + '<img ' + estado + '/>' + " " + nombre + " : " + valor + "</li>";

			$('#ContenidoMarquesinaDos').append(li);	
		});	
	}else{
		var li = "<li class='marquee'>Cargando datos...</li>"
		$('#ContenidoMarquesinaUno').append(li);

	} 		
}


function getData(url,async){
	async = typeof async === 'undefined' ?  true : async;

	return $.ajax({
            	url: url,
            	async:async,
            	type: "GET",
            	dataType: "json",
            	headers:{"accept":"application/json;odata=verbose"}
            });	
}


function putLongOnList(){
    $('.ax-marquee-items>ul').addClass('ax-marquee-list');
    var lengthToList=0;
    $('.ax-marquee-list').each(function(){
        var listLength=$(this).find('li').length;
        var itemLength=$('.marquee').width();
        var totalLength=itemLength*(listLength+2);
        if(totalLength>lengthToList){
            lengthToList=totalLength;
        }
    })
    $('.ax-marquee-list').css('width',lengthToList);
};
