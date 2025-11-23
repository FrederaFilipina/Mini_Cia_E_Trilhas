import axios  from "axios"

const buscarCardsHome = async ()=> {

        try {
            const result = await axios.get("http://localhost:3000/buscar/cards/home")
        
            
            if (result.status===200) {
                
                return {ok:true, result:result.data}
            }
            
        } catch (error) {


               if (error.response) {
            
            return {ok:false,mensagem:error.response.data.mensagem}
        }

        return {ok:false, error:error,mensagem:"Sem resposta do servidor"}
        }

}

export default buscarCardsHome
