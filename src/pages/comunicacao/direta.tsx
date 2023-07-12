import Avo from "@/components/comunicacao/direta/Avo";

export default function PaginaDireta() {
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <h1 className="text-5xl mb-10 font-black">Comunicação Direta</h1>
            <Avo nome="Geraldo" sobrenome="Soares"/>
        </div>
    )
}
