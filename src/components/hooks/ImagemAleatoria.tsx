import Image from "next/image";
import { useState } from "react";

export default function ImagemAleatoria(){

    const [pesquisa, setPesquisa] = useState<string>('abstract')
    const [tamanho, setTamanho] = useState<number>(300)
   
    const url = "https://source.unsplash.com/featured/";

    function urlImagem(){
        return `${url}${pesquisa}`
    }
    
    function renderizarBotao(valor: string){
        return (
            <button className={`
                bg-blue-500 px-4 py-2 rounded-md
                hover:bg-blue-800 font-black
            `} onClick={
                () => { setPesquisa(valor)
                console.log(valor)
            }}>
                {valor}
            </button>
        )
    }
    
    return (
      <div className="flex flex-col gap-3 border border-zinc-500 p-7 rounded-md">
        <div className="flex justify-center items-center gap-7 mb-5 font-black">
            <span>
                {pesquisa}
            </span>
            <span>
                {tamanho}x{tamanho}
            </span>
        </div>
        <Image
          className="rounded-md"
          src={`${url}${tamanho}x${tamanho}?${pesquisa}`}
          height={300}
          width={300}
          alt="Imagem"
        />
        <div className="flex justify-between gap-5">
          {renderizarBotao("abstract")}
          {renderizarBotao("city")}
          {renderizarBotao("person")}
        </div>
        <div className="flex justify-center">
            <input 
                type="number" 
                value={tamanho} 
                className="bg-zinc-800 p-2 rounded-md outline-none w-full" 
                onChange={e => {
                    console.log(e.target.value)
                    setTamanho(parseInt(e.target.value, 10))
                    //ou setTamanho(+e.target.target)
            }}/>
        </div>
      </div>
    );
}