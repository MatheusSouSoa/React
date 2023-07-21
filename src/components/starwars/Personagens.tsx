import useProcessando from "@/data/hooks/useProcessando";
import { useState } from "react";

export default function Personagens() {

    const {processando, iniciarProcessamento, finalizarProcessamento} = useProcessando()
    const [personagens, setPersonagens] = useState<any>([])

    async function simularChamadaAPI() {
        const resp = await fetch('https://swapi.dev/api/people/')
        const data = await resp.json()
        setPersonagens(data.results)
        //console.log(data.results)
        // return new Promise((resolve) => {
        // setTimeout(() => {
        //     resolve(1);
        // }, 6000);
        // });
    }

    async function obterPersonagens() {
        try {
            iniciarProcessamento()
            await simularChamadaAPI();
        } finally {
            finalizarProcessamento()
        }
    }

    function renderizarPersonagens() {
        return (
            <ul>
                {personagens.map((p: any) => (
                    <li key={p.name}>{p.name}</li>
                ))}
            </ul>
        )
    }

    return (
        <div>
            {processando ? (
                <div>Processando...</div>
            ) : personagens.length > 0 ? (
                renderizarPersonagens()
            ) : (
                <div>Nenhum personagem encontrado</div>
            )}

            <button onClick={obterPersonagens} className="bg-blue-500 p-2">Obter</button>
        </div>
    )
}