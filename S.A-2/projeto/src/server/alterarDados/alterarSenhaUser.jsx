import React from 'react'
import axios from 'axios'

const alterarSenhaUser = async (token, senha, novaSenha) => {

    const senhas = {senha:senha,novaSenha:novaSenha}

    if (!token) {

        return { mensagem: "Erro necessário token" }

    }

    try {

        const resultado = await axios.put("https://api-mine-cia.vercel.app/modificar/senha/user",senhas,
            {
                headers: {
                    authorization: token,
                    "Content-Type": "application/json"
                }
            })

        if (resultado.status === 200) {

            return {ok:true, mensagem:resultado.data.mensagem}
        }

    } catch (error) {

          if (error.response) {
            
            return  { ok:false, mensagem:error.response.data.mensagem}
        }

        return {ok:false, error:error,mensagem:"Sem resposta do servidor"}
    }

}

export default alterarSenhaUser
