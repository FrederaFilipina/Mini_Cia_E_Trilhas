
import React from 'react'
import axios from 'axios'

const alterarDadosUser = async (user,token) => {

    if (!token) {

        return {mensagem:"Erro nessesario token"}

    }

    try {

        const resultado =await axios.put("http://localhost:3000/modificar/user/dados",user,{headers:{authorization: token}})
        
        return resultado.data.mensagem

    } catch (error) {
        
        return {mensagem:"Erro ao acessar modificação", error}
    }
    
 
}

export default alterarDadosUser