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




//exportamos este controlador
module.exports = controller;