function CardsEvento(props){
    return(
        <button onClick={props.funcao} className="CardsEvento">
            <p>Nome da Trilha: {props.nomeTrilha}</p>
            <p>Data: {props.data}</p>
            <p>Horário: {props.horario}</p>
            <p>Vagas Disp.: {props.vagas}</p>
        </button>
    )
}
export default CardsEvento