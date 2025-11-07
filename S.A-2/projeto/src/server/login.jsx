import axios from 'axios'

const login = async (user) => {
    console.log(user);

    try {
        const result = await axios.post("http://localhost:3000/logar",user)

        console.log(result.data);


        return result.data.result

    } catch (error) {

        return { mensagem: "Erro ao fazer a pesquisa", error }
    }


}

export default login