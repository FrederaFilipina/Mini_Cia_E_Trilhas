import React from 'react'

const deletarEvento = async(token,idEvento) => {
    if (!token) {

        return {ok:false, mensagem: "Erro necessário token" }

    }

    try {

        const result = await axios.delete(`https://api-mine-cia.vercel.app/deletar/evento/id/${idEvento}`, { headers: { Authorization: token } })

     if (result.status === 200) {
            
            return {ok:true, mensagem:result.data.mensagem , result}
        }

    } catch (error) {

        if (error.response) {

            return { ok: false, mensagem: error.response.data.mensagem }
        }

        return { ok: false, error: error, mensagem: "Sem resposta do servidor" }

    }
 
}

export default deletarEvento
