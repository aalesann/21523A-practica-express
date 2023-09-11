// Se implementa el enrutador de Express
// const router = require('express').Router();

const { Router } = require('express');
const router = Router()
const {
    actualizarPublicacion,
    crearPublicacion,
    eliminarPublicacion,
    obtenerPublicaciones
} = require('../controllers/blog.controllers');

router.get('/', (req, res) => {
    res.render('home')
})

// Crear nueva publicación
router.post('/publicacion', crearPublicacion)

// Obtener todas las publicaciones
router.get('/publicaciones', obtenerPublicaciones)

// Actualizar una publicación
router.put('/publicacion/:id', actualizarPublicacion)

// Eliminar una publicación
router.delete('/publicacion/:id', eliminarPublicacion)

module.exports = router;