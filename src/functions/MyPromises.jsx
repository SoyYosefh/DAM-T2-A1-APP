export function MyPromises() {

    function fcnSumarUno(numero) {
        let promesa = new Promise(function (resolve, reject) {

            if (numero >= 7) {
                reject("El número es muy alto");
            }

            setTimeout(function () {
                resolve(numero + 1);
            }, 800);
        })
        return promesa;
    };

    // fcnSumarUno(5).then( function(nuevoNumero){
    //    console.log(nuevoNumero);
    // });

    // fcnSumarUno(5).then( nuevoNumero=>{
    //    console.log(nuevoNumero);
    // });

    //de forma recursiva de manera encadenada.
    // fcnSumarUno(5).then( nuevoNumero=>{
    //    console.log("Resultado:",nuevoNumero);
    //    return fcnSumarUno(nuevoNumero);
    // }).then( nuevoNumero=>{
    //    console.log("Resultado:",nuevoNumero);
    //    return fcnSumarUno(nuevoNumero);
    // }).then( nuevoNumero=>{
    //    console.log("Resultado:",nuevoNumero);
    // });

    fcnSumarUno(5)
        .then(fcnSumarUno)
        .then(fcnSumarUno)
        .then(nuevoNumero => {
            console.log("Resultado: ", nuevoNumero)
        })
        .catch(error => {
            console.error("Error en la Promesa: ", error)
        });


    return (
        <>
            <div>
                <h2>Programa de Funciones con Promesas</h2>
            </div>
        </>
    );
};