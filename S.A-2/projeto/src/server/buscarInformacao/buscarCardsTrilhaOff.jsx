import axios from "axios"

const buscarCardsTrilhaOff = async () => {

   try {

      const result = await axios.get("http://localhost:3000/buscar/cards/trilha/off")

      // return result.data
      return { ok: true, resultado: result.data.result }

   } catch (error) {

      // return {mensagem: "Erro ao buscar cards", error}
      if (error.response) {
      return { ok: false, mensagem: "Erro ao buscar cards", error: error.response.data }
      }
       return {ok:false, error:error,mensagem:"Sem resposta do servidor"}
   }

}

export default buscarCardsTrilhaOff
