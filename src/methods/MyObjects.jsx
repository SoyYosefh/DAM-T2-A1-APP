function MyObjects() {
    const persona = {
        nombre: 'Martha',
        edad: 30,
        direccion: {
            pais: 'Mexico',
            estado: 'Nayarit',
            ciudad: 'Tepic',
            direccion: 'Conocido No. 533'
        }
    }
    
    console.log("JSON Person:", JSON.stringify(persona, null, 2))
    return (
        <div className="flex flex-col justify-center p-10">
            <h3 className="mb-10">Objetos Literales</h3>
            <code>
                <pre>
                    {JSON.stringify(persona, null, 2)}
                </pre>
            </code>
        </div>
    );
}

export default MyObjects;