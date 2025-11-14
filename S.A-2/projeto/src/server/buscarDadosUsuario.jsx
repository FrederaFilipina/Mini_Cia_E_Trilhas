
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

            return resultado.data.result
        }

    } catch (error) {


        console.log(error)
        return error.response.data.mensagem
    }


}

export default buscarDadosUsuario