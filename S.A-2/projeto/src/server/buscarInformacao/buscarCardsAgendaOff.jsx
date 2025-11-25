import axios from "axios"

const buscarCardsAgendaOff = async () => {


    try {

        const result = await axios.get("https://api-mine-cia.vercel.app/buscar/cards/agenda/off")

        return {ok:true, resultado:result.data.result}
        
    } catch (error) {

        if (error.response) {
            
            return {ok:false,mensagem:error.response.data.mensagem}
        }

        return {ok:false, error:error,mensagem:"Sem resposta do servidor"}
    }

}

export default buscarCardsAgendaOff
