function cambiarPagina(page) {
  switch (page) {
      case "paginaConsultaHoteles":
          $("#codigoB").val("");
          $("#verHotelConsultado").html("");
          break;
  }
  $.mobile.changePage("#" + page, {
      transition: "none"
  });
}

$(document).ready(function() {
    var listaHotel = [];
    var contadorId = 1;
    var latlngInicial = new google.maps.LatLng(10.496943, -75.475775); 
    var latitudPunto = 10.496943;
    var longitudPunto = -75.475775;
    var ubicacion;
    var marcador;
    $("#id").val(contadorId);
    $("#btnRegistroHotel").click(function() {
        cambiarPagina("paginaRegistroHoteles");
        limpiarCampos();
        obtenerPosicionActual();
    });
    function mostrarMapa(posicion) {
        var opciones = {            
            zoom: 10,
            center: posicion,
            mapTypeId: google.maps.MapTypeId.ROADMAP        
        };
        ubicacion = new google.maps.Map(document.getElementById("divMapaRegistro"), opciones);   
        marcador = new google.maps.Marker({            
            position: posicion,
            map: ubicacion,
            draggable: true,
            title: "Hotel "+contadorId        
        });
        google.maps.event.addListener(marcador, 'dragend', function(event) {
            latitudPunto = event.latLng.lat();
            longitudPunto = event.latLng.lng();
            convertirDireccion();
        });
    }
    function convertirDireccion() {
        var geocoder = new google.maps.Geocoder();
        var latlngN = new google.maps.LatLng(latitudPunto, longitudPunto); 
        $.mobile.loading("show", {            
            text: "Convirtiendo Dirección...",
                        textVisible: true,
                        theme: "a",
                        textonly: false,
                        html: ''    
        });
        geocoder.geocode({
            'latLng': latlngN
        }, function(resultados, estado) {
            if (estado == google.maps.GeocoderStatus.OK) {
               $("#direccion").val(resultados[0].formatted_address);
                $.mobile.loading("hide");
            } else {
                $.mobile.loading("hide");
                alert('Error en el servicio!!: ' + estado);
            }
        });
    }
    function exito(pos) {         
        latlngInicial = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude); 
        mostrarMapa(latlngInicial);
        latitudPunto = pos.coords.latitude;  
        longitudPunto = pos.coords.longitude;
        convertirDireccion();
    }        
    function fallido(error) {           
        if (error.code == 0) {
            alert("Oops! No se puede obtener la posición actual.");
        }
        if (error.code == 1) {
            alert("Oops! Algo ha salido mal.");
        }
        if (error.code == 2) {
            alert("Oops! No has aceptado compartir tu posición.");
        }
        if (error.code == 3) {
            alert("Oops! Hemos superado el tiempo de espera");
        }
        mostrarMapa(latlngInicial);
        convertirDireccion();     
    }
    function obtenerPosicionActual() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(exito, fallido, {
                maximumAge: 500000,
                enableHighAccuracy: true,
                timeout: 6000
            });
        }
    }
    $("#btnGuardarHotel").click(function() {
        var id = contadorId;
        var hotel = {
            id: id,
            nombre: $("#nombre").val(),
            latitud: latitudPunto,
            longitud: longitudPunto,
            direccion:$("#direccion").val(),
            telefono:$("#telefono").val(),
            email:$("#email").val(),
            descripcion: $("#descripcion").val()
        }
        listaHotel.push(hotel);
        alert("Hotel resgistrada existosamente!!");
        limpiarCampos();
        obtenerPosicionActual();
        contadorId++;
        $("#id").val(contadorId);
    });

    $("#btnConsultar").click(function() {
        console.log("btnConsultar");
        console.log("btnConsultar lista "+listaHotel.length);
        var codigoB = $("#codigoB").val();
        if(listaHotel.length > 0){
          for (var i = 0; i < listaHotel.length; i++) {
            console.log("btnConsultar:" +codigoB + "=="+listaHotel[i].id);
              if (codigoB == listaHotel[i].id) {
                  $("#c_nombre").val(listaHotel[i].nombre);
                  $("#c_direccion").val(listaHotel[i].direccion);
                  $("#c_telefono").val(listaHotel[i].telefono);
                  $("#c_email").val(listaHotel[i].email);
                  $("#c_descripcion").val(listaHotel[i].descripcion);
                  break;
              }
          };
        }else{
          alert("El Código consultado no se encuentra.");
        }        
    });
    function listar() {
      console.log("listaHotel -1: "+listaHotel.length);
        $('#listaHotel').empty();
        for (var i = 0; i < listaHotel.length; i++) {
            var hotel = "";
            hotel += '<a href="#btnVerHotel" class="ui-btn" data-role="button">';
            hotel += '<h3>' +listaHotel[i].id+" - "+ listaHotel[i].nombre + '</h3>';
            hotel += '<p>' + listaHotel[i].descripcion + '</p>';
            hotel += '</a>';
            var item = "<li>" + hotel + "</li>";
            $("#listaHotel").append(item);
        }
        $('#listaHotel').listview('refresh');
    }
    $("#btnVerHotel").on("pageshow", function() { 
      console.log("btnVerHotel: ");
      var id = sessionStorage.idVerHotel;
      console.log("btnVerHotel: "+id);
      cambiarPagina("paginaConsultaHoteles");     
    });
    $("#btnlistaHotel").click(function() {
        cambiarPagina("paginaListaHoteles");
        listar();
    });

    $("#btnLimpiar").click(function() {
        limpiarCampos();
    });
    function limpiarCampos() {
        $("#nombre").val("");
        $("#direccion").val("");
        $("#telefono").val("");
        $("#telefono").val("");
        $("#email").val("");
        $("#descripcion").val("");
    }
});