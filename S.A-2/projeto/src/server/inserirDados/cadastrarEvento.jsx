import React from 'react'

const cadastrarEvento = async (token,dadosEvento) => {

    if (!token) {

        return {ok:false,mensagem:"Forneça o token"}
        
    }


  try {
        const result = await axios.post("https://api-mine-cia.vercel.app/cadastrar/evento", dadosEvento,
            {
                headers: {
                    authorization: token,
                    "Content-Type": "application/json"
                }
            })

        console.log(result);
        
        if (result.status=== 200) {
            
            return {ok:true,mensagem:result.data.mensagem}
        }


    } catch (error) {
        console.log(error);

        if (error.response) {

            return {ok:false,mensagem: error.response.data.mensagem}
            
        }
        

        return {ok:false, mensagem: "Erro interno no servidor", error }

    }
}

export default cadastrarEvento
