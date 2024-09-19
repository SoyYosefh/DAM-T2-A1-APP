import { useCounter } from "./hooks/useCounter";

function ContadorHook() {

    // const [valor, setValor] = useState(1);
    // const acumular = (num) => {
    //     setValor(valor + num);
    // }

    const { valor, acumular } = useCounter();

    return (
        <div className="flex flex-col gap-5 p-5">
            <h1>Aprender useState</h1>
            <h2>ContadorHook: {valor} </h2>
            <div className="flex gap-2 font-bold">
                <button
                    className="bg-blue-600 rounded-lg px-4 py-2 hover:bg-blue-900 transition-all duration-300"
                    onClick={() => acumular(1)}
                >
                    Sumar (+1)
                </button>
                <button
                    className="bg-blue-600 rounded-lg px-4 py-2 hover:bg-blue-900 transition-all duration-300"
                    onClick={() => acumular(-1)}
                >
                    Restar (-1)
                </button>
            </div>
        </div>
    );
}

export default ContadorHook;