import axios from "axios"


const cadastro = async (user) => {

    
    try {
        const result = await axios.post("https://api-mine-cia.vercel.app/cadastrar/usuario", user)

        console.log(result);
        

        return result

    } catch (error) {
        console.log(error);

        if (error.response) {

            return {ok:false,mensagem: error.response.data.mensagem}
            
        }
        

        return { mensagem: "Erro interno no servidor", error }

    }
}

export default cadastro