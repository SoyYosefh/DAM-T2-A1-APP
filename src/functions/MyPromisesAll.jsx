
function MyPromisesAll() {

    function fcnSumarLento(numero) {
        return new Promise(function (resolve, reject) {
            if (numero < 5) {
                reject('Sumar Lento Fallo');
            }
            setTimeout(function () {
                resolve(numero + 1);
            }, 800);
        });
    }

    let fcnSumarRapido = (numero) => {
        return new Promise((resolve, reject) => {
            if (numero < 10) {
                reject('Sumar Rápido Fallo');
            }
            setTimeout(function () {
                resolve(numero + 1);
            }, 300);
        });
    }

    //* llamada a las funciones
    // fcnSumarLento(5)
    //     .then(respuesta => {
    //         console.log("Respuesta lenta: ", respuesta)
    //     });

    // fcnSumarRapido(10)
    //     .then(respuesta => {
    //         console.log("Respuesta rápida: ", respuesta)
    //     });
    //* llamado de las 2 funciones y sus respectivas promesas al mismo tiempo.
    // Promise.all([fcnSumarLento(5), fcnSumarRapido(10)])
    //     .then(respuestas => {
    //         console.log('Respuestas:', respuestas);
    //     })
    //     .catch(error => {
    //         console.log("Error en todas las promesas: ", error);
    //     });

    let arreglosVarios = [fcnSumarLento(5), fcnSumarRapido(10), true, 'Hola Mundo'];
    // * llamado de las 2 funciones y sus respectivas promesas al mismo tiempo.
    Promise.all(arreglosVarios)
        .then(respuestas => {
            console.log('Respuestas:', respuestas);
        })
        .catch(error => {
            console.log("Error en todas las promesas: ", error);
        });



    return (
        <div>
            <h1>
                Promesas 2
            </h1>
        </div>
    );
}

export default MyPromisesAll;