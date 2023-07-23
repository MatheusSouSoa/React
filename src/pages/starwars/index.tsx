import Background from "@/components/starwars/Background";
import Personagens from "@/components/starwars/Personagens";

export default function PaginaStarWars() {



    return (
        
        <div className="flex justify-center items-center h-screen">
            <Background/>
            <Personagens/>
        </div>
    )
}