const { response } = require("express");

const controller = {};

//consulta la lista de la bd---------------------
controller.list = (req, response) => {
    req.getConnection((err, conn) => { //coneccion a la bd a traves del middlewares que nos agrega el metodo getConnection que pide una coneccion a mysql

    //ejecutamos una consulta, un query;
    conn.query('SELECT * FROM customerv', (err, customersv) => {
        if(err){
            response.json(err);
        }
        
        response.render('customersv', {
            data: customersv
        });

    });

});
};

//funcion que le vamos a dar a la ruta add
controller.save = (req, response) => {
    const data = req.body; //aca llegan los datos que vienen del formulario

    //recibimos todos los campos del formulario
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO customerv set ?', [data], (err, customer) => {
            console.log(customer);
            response.send('works')
        });

    });
};

//exportamos este controlador
module.exports = controller;