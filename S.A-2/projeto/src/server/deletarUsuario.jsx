import React from 'react'
import axios from "axios"


const deletarUsuario = async (token) => {

    if (!token) {

        return { mensagem: "Erro necessário token" }

    }

    try {

        const result = await axios.delete('http://localhost:3000/deletar/user', { headers: { Authorization: token } })

        return result

    } catch (error) {

        if (error.response) {

            return { ok: false, mensagem: error.response.data.mensagem }
        }

        return { ok: false, error: error, mensagem: "Sem resposta do servidor" }

    }
}

export default deletarUsuario
