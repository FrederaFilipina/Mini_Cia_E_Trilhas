import axios from "axios"


const cadastro = async (user) => {
    console.log(user);
    try {
        const result = await axios.post("http://localhost:3000/cadastrar/usuario", user)

        return result

    } catch (error) {

        return { mensagem: "Erro ao fazer o cadastro", error }

    }
}

export default cadastro