// Se implementa el enrutador de Express
// const router = require('express').Router();

const { Router } = require('express');
const router = Router()

router.get('/', (req, res) => {
    res.render('home')
})

router.post('/nueva-publicacion', (req, res) => {
    // Recibir datos por body
    const { titulo, detalle } = req.body

    // TODO: Se deben guardar los datos en una base de datos
    console.log(titulo);
    console.log(detalle);


    return res.send({ msg: "Publicación guardada con éxito"})
    
})



module.exports = router;