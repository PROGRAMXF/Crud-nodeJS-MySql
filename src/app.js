//desde este archivo ejecutamos todo el servidor

const express = require('express');
const path = require('path'); //el modulo path de express se encarga de unir directorios
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');

//luego inicializamos express a traves de una constante llamada app:
const app = express();


//importando rutas-----------------------------------------------------
const customersvroutes = require('./routes/customersv');

//settings - configuramos express--------------------------------------
app.set('port', process.env.PORT || 3000); //revisa si hay un puerto en el sistema operativo y sino que use el puerto 30000
app.set('view engine', 'ejs'); //motor de plantillas
app.set('views', path.join(__dirname, 'views'));//le decimos donde esta la carpeta views

//middlewares----------------------------------------------------------
app.use(morgan('dev'));//muestra mensajes por consola para saber que es lo que le esta llegando al server
app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: 'abc123',
    port: 3306,
    database: 'crudnodejsmysql'
}, 'single'));



//routes (peticiones) para escribir las url--------------------------------------------------
app.use('/', customersvroutes);


//archivos estaticos (archivos complementarios como por ej el css, imagenes etc..)--------------------------------------------------------------------------
app.use(express.static(path.join(__dirname, 'public')));

//iniciando el server-------------------------------------------------------------------------




//luego inicializamos el servidor:
app.listen(app.get('port'), ()=>{
    //le colocamos un mensaje para darnos cuenta de que funciona:
    console.log('server on port 3000');

})