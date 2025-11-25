import React from 'react'

const buscarCardsMinhaAgenda = async(token) => {

    
  if (!token) {
        
        return {ok:false, mensagem: "Token nao fornecido"}
    }

    try {

        const result = await axios.get("https://api-mine-cia.vercel.app/buscar/cards/agenda/user",{headers:{Authorization: token}})

        
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

export default buscarCardsMinhaAgenda
