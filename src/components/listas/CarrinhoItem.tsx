import ItemCarrinho from "@/model/ItemCarrinho"


export default function CarrinhoItem(props: ItemCarrinho) {
    return (
        <div className="flex pr-5 items-center gap-2 rounded-full bg-blue-500">
            <span className="flex justify-center items-center w-7 h-7 rounded-full p-2 bg-blue-700">      
                {props.quantidade}
            </span>
            <span>
                {props.produto.nome}
            </span>
            <span>
                {(props.produto.preco * props.quantidade).toFixed(2)}
            </span>
        </div>
    )
}