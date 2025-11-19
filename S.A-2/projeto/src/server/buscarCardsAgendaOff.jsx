import axios from "axios"

const buscarCardsAgendaOff = async () => {


    try {

        const result = await axios("http://localhost:3000/buscar/cards/agenda/off")

        return {ok:true, resultado:result.data.result}
        
    } catch (error) {
        return { ok:false , mensagem: "Erro ao buscar cards", error }
    }

}

export default buscarCardsAgendaOff
