import React from 'react'

const alterarDadosEvento = async(token,dadosEvento,idEvento) => {

     if (!token) {

        return { mensagem: "Erro necessário token" }

    }

    try {

        const resultado = await axios.put(`https://api-mine-cia.vercel.app/evento/atualizar/id/${idEvento}`, dadosEvento,
            {
                headers: {
                    authorization: token,
                    "Content-Type": "application/json"
                }
            })
            
            if (resultado.status===200) {

                return {ok:true, mensagem:resultado.data.mensagem}
            }

    } catch (error) {

        if (error.response) {
            
            return {ok:false, mensagem:resultado.data.mensagem}
        }

        return {ok:false, error:error,mensagem:"Sem resposta do servidor"}
        
    }
  
}

export default alterarDadosEvento
