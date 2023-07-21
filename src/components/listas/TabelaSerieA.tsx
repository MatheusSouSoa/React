interface TabelaSerieAProps {
    times: string[]
}


export default function tabelaSerieA (props: TabelaSerieAProps) {

    console.log(props.times)
    
    //transformar uma string em li
    // const itens: any[] = []
    // for (let i = 0; i < props.times.length; i++) {
    //     itens.push(
    //         <li key={props.times[i]} className="text-xl list-decimal">
    //             {props.times[i]}
    //         </li>)
    // }

    const itens2 = props.times.map((time, indice) => {
        return (
            <li key={time} className={`
                text-xl list-decimal
                ${indice % 2 === 0 ? 'text-gray-200' : 'text-gray-400'}
            `}>
                {time}
            </li>
        )
    })

    return (
        <ol>
            {itens2}
        </ol>
    )

}