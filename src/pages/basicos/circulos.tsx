import Circulo from "@/components/basico/Circulo";

export default function PaginaCirculos(){
    return (
        <div className="flex justify-around h-screen items-center ">
            <Circulo texto="Circ #1" />
            <Circulo texto="Circ #2" quasePerfeito/>
            <Circulo texto="Circ #3" />
        </div>
    )
}