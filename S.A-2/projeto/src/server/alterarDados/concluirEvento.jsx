import React from 'react'
import axios from 'axios'

const concluirEvento = async (token,idEvento) => {

    
    if (!token) {

        return {mensagem: "Erro necessário token"}
        
    }

    try {

        const resulado = await axios.put(`https://api-mine-cia.vercel.app/modificar/evento/concluir/id/${idEvento}`,{},{headers:{Authorization: token}})

        if (resulado.status === 200) {
            
            return resulado.data.mensagem
        }

    } catch (error) {
        
         if (error.response) {

            return { ok: false, mensagem: error.response.data.mensagem }
        }

        return { ok: false, error: error, mensagem: "Sem resposta do servidor" }
    }

}

export default concluirEvento
