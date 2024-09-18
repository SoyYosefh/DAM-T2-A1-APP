import { useState } from "react";

export const useCounter = () => {
    const [valor, setValor] = useState(1);

    const acumular = (num) => {
        setValor(valor + num);
    }

    return {
        valor,
        acumular
    }
}
