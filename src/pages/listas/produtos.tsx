import Carrinho from "@/components/listas/Carrinho";
import ListaProdutos from "@/components/listas/ListaProdutos";
import produtos from "@/constants/produtos";
import CarrinhoContexto from "@/data/contexts/CarrinhoContexto";
import Link from "next/link";
import { useContext } from "react";

export default function PaginaProdutos () {
  
    const ctx = useContext(CarrinhoContexto)

    return (
        <div className="flex flex-col justify-center items-center h-screen gap-10">
            <Carrinho itens={ctx.itens} />
            <ListaProdutos produtos={produtos} comprar={ctx.adicionarProduto} />
            <Link href="/">Voltar</Link>
        </div>
    );
}