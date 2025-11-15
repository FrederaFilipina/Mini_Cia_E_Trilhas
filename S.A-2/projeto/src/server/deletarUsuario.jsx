import React from 'react'
import axios from "axios"


const deletarUsuario = async (token) => {
  
    if (!token) {

        return {mensagem: "Erro necessário token"}
        
    }

        try {

            const result = await axios.delete('http://localhost:3000/deletar/user',{headers:{Authorization: token}})
            
            return result
            
        } catch (error) {

            console.log(error);
            
            return error.response.data
            
        }
}

export default deletarUsuario
