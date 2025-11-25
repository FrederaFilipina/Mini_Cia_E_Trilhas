import axios from 'axios'

const login = async (user) => {
    console.log(user);

    try {
        const result = await axios.post("https://api-mine-cia.vercel.app/logar",user)

        return result

    } catch (error) {

        return { mensagem: "Erro ao fazer o login", error }
    }


}

export default login