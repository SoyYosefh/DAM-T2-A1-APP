function MyFetchPut() {

    // Objeto de usuario que se actualizará en la solicitud PUT.
    let usuarioActualizado = {
        nombre: 'Jose Ramon',
        edad: 26 // Nota que la edad ha sido actualizada
    };

    // Realiza una solicitud PUT usando la API Fetch para actualizar datos de usuario en la API.
    fetch('https://reqres.in/api/users/1', { // Usamos el ID del usuario (1 en este caso) para actualizar.
        method: 'PUT', // Método HTTP PUT.
        body: JSON.stringify(usuarioActualizado), // Convierte el objeto usuario actualizado a una cadena JSON.
        headers: {
            'Content-Type': 'application/json' // Establece el tipo de contenido como JSON.
        }
    })
        .then(resp => resp.json()) // Convierte la respuesta en formato JSON.
        .then(console.log) // Imprime la respuesta en la consola.
        .catch(error => {
            console.log('Error en la petición API PUT'); // Manejo de errores en caso de fallo.
            console.log(error);
        });

    return (
        <div className="flex flex-col items-center justify-center h-screen w-full p-10">
            <h1>
                Programa para FETCH API PUT.
            </h1>
        </div>
    );
}

export default MyFetchPut;
