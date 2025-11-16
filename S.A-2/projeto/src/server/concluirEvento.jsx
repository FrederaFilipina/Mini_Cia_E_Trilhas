import React from 'react'
import axios from 'axios'

const concluirEvento = async (token,idEvento) => {

    
    if (!token) {

        return {mensagem: "Erro necessário token"}
        
    }

    try {

        const resulado = await axios.put(`http://localhost:3000/modificar/evento/concluir/id/${idEvento}`,{},{headers:{Authorization: token}})

        if (resulado.status === 200) {
            
            return resulado.data.mensagem
        }

    } catch (error) {
        
        console.log(error);
        
        return error.response.data.mensagem
    }

}

export default concluirEvento
