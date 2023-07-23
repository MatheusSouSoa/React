import { useCallback, useEffect, useState } from "react"

export default function Contador () {

    const [delta, setDelta] = useState(1)
    const [valor, setValor] = useState(0)
    const [multi10, setMulti10] = useState(0)

    const calcularValorMulti10 = useCallback((valor: number) => {
        return valor * 10
    }, [])

    useEffect(() => {
        console.log("Executando o useEffect...")
        const multi10 = calcularValorMulti10(valor)
        setMulti10(multi10)
    }, [valor, calcularValorMulti10])

    // useEffect(() => {
    //     //setValor(valor+1)
    //     setMulti10(valor * 10)
    // }, [valor])

    // useEffect(() => {
    //     console.log("Multi10 mudou para ", multi10)
    // }, [multi10])

    return (
        <div className="flex flex-col gap-5 items-center">
            <span className="text-5xl">{valor}</span>
            <span className="text-xl text-zinc-500">{multi10}</span>
            <span className="text-sm text-zinc-500">{delta}</span>
            <div className="flex gap-5">
                <button className="botao" onClick={() => setValor(valor - delta)}>
                    -1
                </button>
                <button 
                    className="botao" 
                    onClick={() =>setValor(valorAtual => valorAtual + delta)}
                >
                    +1
                </button>
            </div>
            <input 
                type="number" 
                value={delta} 
                onChange={(e) => setDelta(+e.target.value)}
                className="bg-zinc-900 px-2"
            />
        </div>
    )
}