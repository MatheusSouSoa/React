import ItemCarrinho from "@/model/ItemCarrinho";
import CarrinhoItem from "./CarrinhoItem";
import { IconCircleX } from "@tabler/icons-react";

interface CarrinhoProps {
    itens: ItemCarrinho[]
}

export default function Carrinho(props: CarrinhoProps) {

    const total = props.itens.reduce((soma, item) => {
        return soma + item.quantidade * item.produto.preco
    }, 0)

    return (
        <div className="flex flex-col w-4/5 border border-white rounded-md overflow-hidden ">
            <div className=" bg-zinc-800 text-3xl p-3 flex justify-between items-center">
                <span>Carrinho</span>
                <span>R${total.toFixed(2)}</span>
            </div>
            <div className="flex gap-5 p-5">
                {props.itens.length === 0 ? 

                <div className="flex justify-center items-center gap-5 text-zinc-500">
                    <IconCircleX/>
                    <span>Nenhum item no carrinho</span>
                </div>
                
                :
                 
                props.itens.map((item, index) => {
                    return (
                        <CarrinhoItem key={index} {...item}/>
                    )
                })}
            </div>
        </div>
    )

}