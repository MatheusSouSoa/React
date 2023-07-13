import { useState } from "react";

interface PerguntaProps {
    texto: string;
    resposta: string;
}

export default function Pergunta (props: PerguntaProps) {

    const [aberta, setAberta] = useState <boolean>(false)

    return (
      <div className={`border border-zinc-600 rounded-md overflow-hidden `}>
        <div
          className={` bg-zinc-800 p-5 cursor-pointer select-none w-screen`}
          onClick={() => setAberta(!aberta)}
        >
          {props.texto}
        </div>
        {aberta && 
            <div className={`p-5`}>
                {props.resposta}
            </div>
        }
      </div>
    );
}