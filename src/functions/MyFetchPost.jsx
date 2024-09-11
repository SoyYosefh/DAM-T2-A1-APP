function MyFetchPost() {

    // Objeto de usuario que será enviado en la solicitud POST.
    let usuario = {
        nombre: 'Jose Ramon',
        edad: 25
    };

    // Realiza una solicitud POST usando la API Fetch para enviar datos de usuario a la API.
    fetch('https://reqres.in/api/users', {
        method: 'POST', // Método HTTP POST.
        body: JSON.stringify(usuario), // Convierte el objeto usuario a una cadena JSON.
        headers: {
            'Content-Type': 'application/json' // Establece el tipo de contenido como JSON.
        }
    })
        .then(resp => resp.json()) // Convierte la respuesta en formato JSON.
        .then(console.log) // Imprime la respuesta en la consola.
        .catch(error => {
            console.log('Error en la petición API POST'); // Manejo de errores en caso de fallo.
            console.log(error);
        });

    return (
        <div className="flex flex-col items-center justify-center h-screen w-full p-10">
            <h1 className="text-7xl">
                Programa para FETCH APIs.
            </h1>
        </div>
    );
}

export default MyFetchPost;
