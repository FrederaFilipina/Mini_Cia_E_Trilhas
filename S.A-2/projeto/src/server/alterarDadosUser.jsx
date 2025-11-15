
import React from 'react'
import axios from 'axios'

const alterarDadosUser = async (user, token) => {

    if (!token) {

        return { mensagem: "Erro necessário token" }

    }

    try {

        const resultado = await axios.put("http://localhost:3000/modificar/user/dados", user,
            {
                headers: {
                    authorization: token,
                    "Content-Type": "application/json"
                }
            })
            
            if (resultado.status===200) {

                return resultado.data.mensagem
            }

    } catch (error) {

        
        
        return error.response.data.mensagem
    }


}

export default alterarDadosUser