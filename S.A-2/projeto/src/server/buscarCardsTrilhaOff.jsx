import axios from "axios"

const  buscarCardsTrilhaOff = async () =>{
 
 try {

    const result = await axios.get("http://localhost:3000/buscar/cards/trilha/off")
    
    return result.data

 } catch (error) {
    
    return {mensagem: "Erro ao buscar cards", error}
 }


  
}

export default buscarCardsTrilhaOff
