import { useState } from "react";
import Botoes from "./Botoes";
import Display from "./Display";

export default function Contador() {

    const [num, setNumber] = useState<number>(0)

    function incrementar (valor: number) {
        setNumber(num + valor)

    }
    function decrementar (valor: number) {
        setNumber(num - valor)
    }

    return (
        <div className={`
            flex flex-col p-2 w-72 h-72
            border border-zinc-400 rounded-md
        `}>
            <Display valor={num}/>
            <Botoes inc={incrementar} dec={decrementar}/>
        </div>
    )
}