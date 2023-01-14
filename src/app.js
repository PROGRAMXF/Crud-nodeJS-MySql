//desde este archivo ejecutamos todo el servidor

const express = require('express');

//luego inicializamos express a traves de una constante llamada app:
const app = express();

//luego inicializamos el servidor:
app.listen(3000, ()=>{
    //le colocamos un mensaje para darnos cuenta de que funciona:
    console.log('server on port 3000');

})