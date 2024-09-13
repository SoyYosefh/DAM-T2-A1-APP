function MyDataTypes() {

    let idNombre = "José Ramón";

    idNombre = 706;

    console.log(idNombre)

    const Nombre = "Jose Ramon";
    const Apellidos = "Tejeda Navarro"
    const NumControl = 19400678;
    const NumControl2 = 19400876;
    const FechaReg = new Date();
    let Experiencia = 20;
    let Activo = true;

    return (
        <div className="flex flex-col items-center justify-center p-5">
            <h1 className="text-3xl mb-10">
                Programa para diferentes tipos de datos:
            </h1>
            <div>
                <p>
                    <span className="font-black">
                        idNombre:
                    </span> {idNombre}
                </p>
                <p>
                    <span className="font-black">
                        Nombre:
                    </span> {Nombre}
                </p>
                <p>
                    <span className="font-black">
                        Apellidos:
                    </span> {Apellidos}
                </p>
                <p>
                    <span className="font-black">
                        NumControl:
                    </span> {NumControl}
                </p>
                <p>
                    <span className="font-black">
                        NumControl2:
                    </span> {NumControl2}
                </p>
                <p>
                    <span className="font-black">
                        FechaReg:
                    </span> {FechaReg.toString()}
                </p>
                <p>
                    <span className="font-black">
                        Experiencia:
                    </span> {Experiencia}
                </p>
                <p>
                    <span className="font-black">
                        Activo:
                    </span> {Activo ? "Activo" : "Inactivo"}
                </p>
            </div>
        </div>
    );
}

export default MyDataTypes;