interface DisplayProps {
    valor: number
}

export default function Display(props: DisplayProps) {
    return (
        <div className="flex justify-center items-center flex-1 bg-zinc-800 rounded-md text-5xl font-black p-5">
            {props.valor}
        </div>    
    )
}
