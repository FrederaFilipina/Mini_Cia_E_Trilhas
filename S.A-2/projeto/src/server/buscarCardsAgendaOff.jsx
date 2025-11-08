import axios from "axios"

const buscarCardsAgendaOff = async () => {


    try {

        const result = await axios("http://localhost:3000/buscar/cards/agenda/off")

        return result.data
        
    } catch (error) {
        return { mensagem: "Erro ao buscar cards", error }
    }

}

export default buscarCardsAgendaOff
