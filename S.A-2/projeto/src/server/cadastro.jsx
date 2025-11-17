import axios from "axios"


const cadastro = async (user) => {
    try {
        const result = await axios.post("http://localhost:3000/cadastrar/usuario", user)

        console.log(result);
        

        return result

    } catch (error) {
        console.log(error);
        

        return { mensagem: "Erro ao fazer o cadastro", error }

    }
}

export default cadastro