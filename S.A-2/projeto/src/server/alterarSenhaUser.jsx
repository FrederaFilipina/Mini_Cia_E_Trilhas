import React from 'react'
import axios from 'axios'
const alterarSenhaUser = async (token, senha, novaSenha) => {

    const senhas = {senha:senha,novaSenha:novaSenha}

    if (!token) {

        return { mensagem: "Erro necessário token" }

    }

    try {

        const resultado = await axios.put("http://localhost:3000/modificar/senha/user",senhas,
            {
                headers: {
                    authorization: token,
                    "Content-Type": "application/json"
                }
            })

        if (resultado.status === 200) {

            return resultado.data.mensagem
        }

    } catch (error) {

        console.log(error);

        
        return error.response.data
    }

}

export default alterarSenhaUser
