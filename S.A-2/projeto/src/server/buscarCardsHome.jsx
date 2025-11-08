import axios  from "axios"

async function buscarCardsHome() {

        try {
            const result = await axios.get("http://localhost:3000/buscar/cards/home")
        
        
            return result.data
            
        } catch (error) {
            return {mensagem: "Erro ao buscar cards", error}
        }

}

export default buscarCardsHome
