//Declaración de variables
var lista = new Array;

//Sacamos el Mensaje de Bienvenida
function event_onload() {
  alert('*** Bienvenido a Evaluación Final Java Script ***');
}

/*
 *@Emmanuel Montaño Cabrera
 *Fecha:13/03/2018
 *Funcion que edita el Estudiante
 */
function editarEstudiante(id) {
    var estudiante;
    for (var i = 0; i < localStorage.length; i++) {
        var clave = localStorage.key(i);
        if (clave == id) {
            estudiante = $.parseJSON(localStorage.getItem(clave));
            $("#id").val(estudiante.id);
            $("#nombre").val(estudiante.nombre);
            $("#nota").val(estudiante.nota);
        }
    }
}

/*
 *@Emmanuel Montaño Cabrera
 *Fecha:13/03/2018
 *Se lista los Estudiantes
 */
function listarEstudiante() {
    var tabla = "";
    var parrafo2 = $("#p2");
    tabla += '<table border="1">';
    tabla += '<tr>';
    tabla += '<th align="center">Codigo</th>';
    tabla += ' <th>Nombre</th>';
    tabla += '<th>Nota</th>';
    tabla += '<th>Editar</th>';
    tabla += '<th>Eliminar</th>';
    tabla += '</tr>';
    for (var i = 0; i < localStorage.length; i++) {
        var clave = localStorage.key(i);
        var estudiante = $.parseJSON(localStorage.getItem(clave));
        tabla += '<tr>';
        tabla += '<td align="center">' + estudiante.id + '</td>';
        tabla += '<td>' + estudiante.nombre + '</td>';
        tabla += '<td align="center">' + estudiante.nota + '</td>';
        tabla += '<td><button onclick="editarEstudiante(\'' + estudiante.id + '\');">Editar</button></td>';
        tabla += '<td><button onclick="eliminarEstudiante(\'' + estudiante.id + '\');">Eliminar</button></td>';
        tabla += '</tr>';
    }
    tabla += '</table>';
    $(parrafo2).html(tabla);
}

/*
 *@Emmanuel Montaño Cabrera
 *Fecha:13/03/2018
 *Se Eliminan el Estudiante por medio de codigo
 */
function eliminarEstudiante(id) {
    localStorage.removeItem(id);
    listarEstudiante();
}

$(document).ready(function() {
  var contador;
  if(localStorage.length > 0){
    contador = localStorage.length+1;
  }else{
    contador = 1;
  }
  $("#id").val(contador);
  $("#btn_Registrar").click(function() {
      var id     = $("#id").val();
      var nombre = $("#nombre").val();
      var nota   = $("#nota").val();
      if(nombre == null || nombre.length == 0 || /^\s+$/.test(nombre) || nota == null) {
          alert("Campos Obligatorios *");
      }else{
        var estudiante = {
            id: id,
            nombre: nombre,
            nota: nota
        };
        localStorage.setItem(id, JSON.stringify(estudiante));
        contador = localStorage.length + 1;
        listarEstudiante();
        reestablecer(); 
      }          
  });
  /*
   *@Emmanuel Montaño Cabrera
   *Fecha:13/03/2018
   *Se limpian los campos de registro de Estudiante
  */
  $("#btn_limpiar").click(function() {
      reestablecer();
  });
  function reestablecer() {
      $("#id").val(contador);
      $("#nombre").val("");
      $("#nota").val("");
  }
  listarEstudiante();
});

/*
  *@Emmanuel Montaño Cabrera
  *Fecha:13/03/2018
  *Sacamos el Promedio de Notas de los Estudiantes
 */
function event_Promedio() {
  var parrafo1 = $("#p1");
  var suma = 0;
  console.log("Cantidad registro"+localStorage.length);
  for (var i = 0; i < localStorage.length; i++) {
      var estudiante = $.parseJSON(localStorage.getItem(localStorage.key(i)));
      console.log("Nota:"+estudiante.nota);
      suma  += parseInt(estudiante.nota);
      console.log("Suma Nota:"+suma);
  }
  suma = suma/localStorage.length;
  var contenido = "La nota promedio es:"+suma.toFixed(2);
  alert(contenido);
  $(parrafo1).html(contenido);
}

/*
  *@Emmanuel Montaño Cabrera
  *Fecha:13/03/2018
  * Mostramos la nota mas baja utilizando Math.min
 */
function event_MenorNota() {
  var parrafo1 = $("#p1");
  llenarLista();
  menorNota = Math.min.apply(null, lista);
  var contenido = "Las Menor nota es:"+menorNota; 
  alert(contenido);
  $(parrafo1).html(contenido);
} 

/*
  *@Emmanuel Montaño Cabrera
  *Fecha:13/03/2018
  * Mostramos la nota mas baja utilizando Math.max
 */
function event_MayorNota() {
  var parrafo1 = $("#p1");
  llenarLista();
  mayorNota = Math.max.apply(null, lista);
  var contenido = "Las Mayor nota es:"+mayorNota;
  alert(contenido);
  $(parrafo1).html(contenido);
}

/*
  *@Emmanuel Montaño Cabrera
  *Fecha:13/03/2018
  * Llenamos la lista con las notas de los estudiantes
 */
function llenarLista() {
  for (var i = 0; i < localStorage.length; i++) {
    var estudiante = $.parseJSON(localStorage.getItem(localStorage.key(i)));
    lista[i] = parseInt(estudiante.nota);
  }
}