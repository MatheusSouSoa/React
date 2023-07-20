import { useState } from "react";
import Pergunta from "./Pergunta";

export default function Faq () {
    
    const [ativo, setAtivo] = useState<number>(0)

    function alternarVisibilidade(indice: number) {
      indice === ativo ? setAtivo(-1) : setAtivo(indice)
    }
    
    return (
      <div className={`flex flex-col gap-2 w-[90%] md:w-3/4`}>
        <Pergunta
          indice={0}
          aberta={ativo === 0}
          alternarVisibilidade={alternarVisibilidade}
          texto="What is Lorem Ipsum?"
          resposta="is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
        />
        <Pergunta
          indice={1}
          aberta={ativo === 1}
          alternarVisibilidade={alternarVisibilidade}
          texto="Where does it come from?"
          resposta={`
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
`}
        />
        <Pergunta
          indice={2}
          aberta={ativo === 2}
          alternarVisibilidade={alternarVisibilidade}
          texto="Why do we use it?"
          resposta="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
        />
      </div>
    );
}