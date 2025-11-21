import axios from "axios"

const buscarCardsTrilhaOff = async () => {

   try {

      const result = await axios.get("http://localhost:3000/buscar/cards/trilha/off")

      // return result.data
      return { ok: true, resultado: result.data.result }

   } catch (error) {

      // return {mensagem: "Erro ao buscar cards", error}
      return { ok: false, mensagem: "Erro ao buscar cards", error: error.response.data }
   }

}

export default buscarCardsTrilhaOff
