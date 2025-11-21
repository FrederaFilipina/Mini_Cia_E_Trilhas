import './CardsEvento.css'

function CardsTrilhaOff(props){
    return(
        <div className="CardsTrilhasOff">
            <p>{props.nome}</p>
            <p>Dist.: {props.dis}</p>
            <p>Tempo: {props.tmp}</p>
            <p>Dificuldade: {props.dif}</p>
        </div>
    )
}

export default CardsTrilhaOff