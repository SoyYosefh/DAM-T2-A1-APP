function MyFetchBlob() {

    // Obtiene referencias a los elementos de imagen por sus ID.
    let img1 = document.getElementById('IdImg1');
    let img2 = document.getElementById('IdImg2');

    // Realiza una solicitud GET para obtener el primer archivo de imagen como un blob.
    fetch('images/MazingerZ-1.png')
        .then(resp => resp.blob()) // Convierte la respuesta de la solicitud en un objeto Blob.
        .then(image => {
            console.log(image); // Imprime el Blob en la consola para inspección.
            // Crea una URL de objeto a partir del Blob y asigna esta URL a la fuente de la primera imagen.
            var imgPath1 = URL.createObjectURL(image);
            img1.src = imgPath1;
        });

    // Realiza una solicitud GET para obtener el segundo archivo de imagen como un blob.
    fetch('images/MazingerZ-2.png')
        .then(resp => {
            return resp.blob(); // Convierte la respuesta de la solicitud en un objeto Blob.
        })
        .then(image => {
            console.log(image); // Imprime el Blob en la consola para inspección.
            // Crea una URL de objeto a partir del Blob y asigna esta URL a la fuente de la segunda imagen.
            var imgPath2 = URL.createObjectURL(image);
            img2.src = imgPath2;
        });

    return (
        <div className="flex flex-col items-center h-screen w-full p-10">
            <h1 className="text-5xl mb-10">
                Programa para FETCH API PUT.
            </h1>
            <div className="flex gap-2">
                {/* Elementos de imagen que mostrarán las imágenes cargadas. */}
                <img src="" alt="" id="IdImg2" width="100" height="100" />
                <img src="" alt="" id="IdImg1" width="100" height="100" />
            </div>
        </div>
    );
}

export default MyFetchBlob;
