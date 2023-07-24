import Contador from "@/components/contexto/Contador";
import {ContadorProvider} from "@/data/contexts/ContadorContext";

export default function PaginaContador() {


  return (
    <div className="flex flex-col justify-center items-center h-screen relative">
      <Contador/>
    </div>
  );
}
