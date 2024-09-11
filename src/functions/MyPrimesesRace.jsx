function MyPrimesesRace() {

    function fcnSumarLento(numero) {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve(numero + 1);
            }, 800);
        });
    }

    let fcnSumarRapido = (numero) => {
        return new Promise((resolve, reject) => {
            setTimeout(function () {
                // resolve(numero + 1);
                reject('Error en la promesa de la funcion Sumar Rapido');
            }, 1000);
        });
    }

    // Promise.race
    Promise.race([fcnSumarLento(5), fcnSumarRapido(10)])
        .then(respuestas => {
            console.log('Respuestas:', respuestas);
        }).catch(error => {
            console.log("Error en la respuesta de la promesa: ", error);
        });

    return (
        <div>
            <h1>
                Programa de Funciones con Promesas RACE
            </h1>
        </div>
    );
}

export default MyPrimesesRace;