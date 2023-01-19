const express = require('express');
const router = express.Router(); //es un metodo que me devuelve un objeto de js para que le pueda ir agregando rutas


const customersvController =  require('../controllers/customersvController');


//rutas de las url-------------------------------------------------
router.get('/', customersvController.list);
router.post('/add', customersvController.save); //recibe datos


//luego lo exporto
module.exports = router;
