import axios from "axios"

const buscarCardsAgendaOff = async () => {


    try {

        const result = await axios.get("http://localhost:3000/buscar/cards/c")

        return {ok:true, resultado:result.data.result}
        
    } catch (error) {

        if (error.response) {
            
            return {ok:false,mensagem:error.response.data.mensagem}
        }

        return {ok:false, error:error,mensagem:"Sem resposta do servidor"}
    }

}

export default buscarCardsAgendaOff
