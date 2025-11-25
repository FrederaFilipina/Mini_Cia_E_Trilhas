import React from 'react'

const participarEvento = async(token,idEvento) => {

     try {
        const result = await axios.post(`https://api-mine-cia.vercel.app/participar/evento/id/${idEvento}`, {
                headers: {
                    authorization: token,
                    "Content-Type": "application/json"
                }
            })


            if (result.status===200) {

                return {ok:true,mensagem:result.data.mensagem, result}
                
            }

    } catch (error) {
        console.log(error);

        if (error.response) {

            return {ok:false,mensagem: error.response.data.mensagem}
            
        }
        

        return { mensagem: "Erro interno no servidor", error }

    }

  
}

export default participarEvento
