
import React from 'react'
import axios from 'axios'

const buscarDadosUsuario = async (token) => {

    if (!token) {

        return { mensagem: "Erro nessesario token" }

    }

    try {

        const resultado = await axios.get("http://localhost:3000/buscar/dados/user", { headers: { authorization: token } })

        console.log(resultado);

        if (resultado.status === 200) {

            return { ok: true, result: resultado.data.result }
        }

    } catch (error) {

        if (error.response) {

            return { ok: false, mensagem: error.response.data.mensagem }
        }

        return { ok: false, error: error, mensagem: "Sem resposta do servidor" }

    }


}

export default buscarDadosUsuario