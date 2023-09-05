// Importación de librerías
const express = require('express')
const cors = require('cors');
const morgan = require('morgan');

const app = express()

const port = 3000;

// Middlewares
app.use(cors())
app.use(morgan('combined'))
app.use(express.json()) // Para que el servidor pueda comprender datos en formato json


app.get('/', function (req, res) {
  res.send('Hello World')
})

app.post('/user',(req, res) => {
  
    // Recibir datos por body
    const { name, lastname, id  } = req.body

    res.send({
        name,
        lastname,
        id
    })
})

app.listen(port, () => console.log(`Servidor en http://localhost:${port}`))