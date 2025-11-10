import axios from "axios"

const buscarCardsTrilhaOn = async (token) => {

    if (!token) {
        
        return {mensagem: "Token nao fornecido"}
    }

    try {

        const result = await axios.get("http://localhost:3000/buscar/cards/trilha/on",{headers:{Authorization: token}})

        console.log(result)
        return result
        
    } catch (error) {

        return {mensagem: "Erro ao buscar cards", error}
    }   
  
}

export default buscarCardsTrilhaOn
