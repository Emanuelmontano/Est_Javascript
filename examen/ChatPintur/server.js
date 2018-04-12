var express = require('express');
var app = express();

var server = require('http').createServer(app);
var io = require('socket.io')(server);
var redis = require('redis');
var client = redis.createClient();

//Aquí almacenamos las variables de sesión
var session = require('express-session');
var RedisStore = require('connect-redis')(session);

//Passport
var passport = require('passport');

//Flash para enviar mensajes temporales como respuesta
var flash = require('connect-flash');

//Logger de peticiones http
var logger = require('morgan');
//Parsea las cookies y pobla el objeto req.cookies con un objeto de llaves, que tiene el nombre de la cookie
var cookieParser = require('cookie-parser');
//Parsea el cuerpo de las peticiones y respuestas http
var bodyParser = require('body-parser');

var path = require('path');
var _ = require('lodash');

//Requerimos Swig
var swig = require('swig');

var usuarios = []; //inicializa arreglo usuarios
var clientes = {}; //inicializa arreglo clientes
//var mensajes = [];

var Usuario = require('./models/usuarios'); //rotea variable iamgen en la carpeta models
var Mensaje = require('./models/mensajes'); //rotea variable iamgen en la carpeta models
var Imagen = require('./models/imagenes');  //rotea variable iamgen en la carpeta models
/**************Configuración**************/

//Con esto le decimos a express, que motor de template utilizar, a lo que asignamos Swig.
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

//En desarrollo deshabilitamos el cacheo de templates, pero en un entorno de desarrollo es esencial, para el optimo rendimiento.
app.set('view cache', false);
swig.setDefaults({ cache: false });

app.use(logger('dev'));
app.use(bodyParser()); // Para subir archivo
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Necesario para la gestión de las variables de sesión
app.use(session({
  store : new RedisStore({}),
  secret : 'appPintur'
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

/**************Configuración**************/
passport.deserializeUser(function(obj, done) {
  console.log("Deserialize: "+obj);
  done(null, obj);
});

passport.serializeUser(function(user, done) {
  console.log("Serialize: "+user);
  done(null, user);
});

//Routes
var routes = require('./routes/routes');
routes(app);

//Connections 
var local = require('./connections/local');
local(app);

//twitter
var twitter = require('./connections/twitter');
twitter(app);

//Socket.io

function storeMessages(usuario, mensaje){
  var objeto = new Mensaje({usuario : usuario, mensaje : mensaje});
  objeto.save(function (err, mensaje){
    if (err) {console.log(err);}
    console.log(mensaje);
  });  
}
function storeMessagesImagen(usuario, imagen) {
  var objeto = new Imagen({usuario: usuario, imagen: imagen});
  objeto.save(function (err, imagen) {
    if (err) {console.log(err);}
    console.log(imagen);
  });
}
io.on('connection', function(socket){  
  socket.on('disconnect', function(){
    console.log('user disconnected');
    client.hdel("usuarios", socket.id);
  });
  socket.on('chat message', function(msj){
  	var match = /@([^@]+)@/.exec(msj.mensaje);  	  
  		if (match != null) {         
        client.hgetall("usuarios", function(err, usuarios){
          _.forEach(usuarios, function(x,y){
            console.log(x,y);
            if (x == match[1]) {
              socket.emit('chat message', msj);
              socket.broadcast.in(y).emit('chat message', msj);
            }
          });          
        });
  		}else{
        io.emit('chat message', msj);
        console.log(msj);
        storeMessages(msj.usuario, msj.mensaje);
  		}
  });
  socket.on('new imagen', function (msj) {
    var match = /@([^@]+)@/.exec(msj.imagen);
    if (match != null) {
      client.hgetall("usuarios", function (err, usuarios) {
        _.forEach(usuarios, function (x, y) {
          console.log(x, y);
          if (x == match[1]) {
            socket.emit('new imagen', msj);
            socket.broadcast.in(y).emit('new imagen', msj);
          }
        });
      });
    } else {
      io.emit('new imagen', msj);
      console.log(msj);
      storeMessagesImagen(msj.usuario, msj.imagen);
    }
  });
  socket.on('new user', function(nombre){
    console.log(socket.id);
    client.hset("usuarios", socket.id.toString(), nombre);
    client.hgetall("usuarios", function (err, usuarios){
      io.emit('new user', usuarios);
    });

    Mensaje.find({}).exec(function(err, mensajes){
      if (err) {console.log(err);};
      mensajes.forEach(function(mensaje, i){
        socket.emit('chat message', mensaje);
      });
    });
    Imagen.find({}).exec(function (err, imagenes) {
      if (err) {console.log(err);};
      imagenes.forEach(function (imagen, i) {
        socket.emit('new imagen', imagen);
      });
    });
  });
});	

// Código para subir imágenes
var multipart = require('connect-multiparty');
app.use(multipart());

app.post('/subir', function (req, res) {
  if(req.files.miarchivo){
    var tipo = req.files.miarchivo.type;
    if (tipo == 'image/png' || tipo == 'image/jpg' || tipo == 'image/jpeg') {
        //Nos ayuda a escribir los archivos a nuestro servidor
        var fs = require('fs');        
        /* Creamos carpeta
        var mkdirp = require('mkdirp'); 
        var nombreCarpeta='miCarpeta'; 
        mkdirp('./public/'+nombreCarpeta, function(err) { 
          console.log("Carpeta Creada"); 
        });
        */
        var tmpPath = req.files.miarchivo.path;        
        var targetPath = path.resolve('./public/uploads/');
        var aleatorio = Math.floor((Math.random()*999)+1);
        var nombreArchivo = 'hola';//aleatorio + '-' + req.files.miarchivo.name;
        var target_Path = './public/uploads/'+nombreArchivo
        console.log("nombreArchivo-->>"+target_Path);
        fs.rename(tmpPath, target_Path, function (err) {
          if(err){
            console.log("tmpPath-->>"+err);
            return res.send('Error en el nombre del archivo o la ruta');
          }
          fs.unlink(tmpPath, function (err) {
              res.send('El usuario: <strong>' + req.session.passport.user.usuario + '</strong>  subió imagen: <br><a href="/index"><img src="./uploads/'+nombreArchivo+'" />');
              res.render('subir', {
                src:'./uploads/'+nombreArchivo,
                usuario: req.session.passport.user.usuario
              });
          });
        });
    } else {
      res.send('El tipo de archivo es inválido');
    }
  } else {
    res.send('No se adjunto archivo.');
  }
});

server.listen(3000, function(){
	console.log('Servidor corriendo en el puerto 3000');
});


