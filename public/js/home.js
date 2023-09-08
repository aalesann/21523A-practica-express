
// Referencia al elemento de formulario html
const formGuardar = document.querySelector("#form-guardar")


formGuardar.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Se capturan los datos del formulario
    const titulo = document.querySelector('#titulo-post').value;
    const detalle = document.querySelector('#detalle-post').value;

    // Enviar al servidor
    const response = await fetch('/nueva-publicacion', {
        method: 'post',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify({ titulo, detalle})
    })
    const data = await response.json();

    console.log(data.msg);

})