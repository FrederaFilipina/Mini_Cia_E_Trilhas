
const jwt = require("jsonwebtoken")

require("dotenv").config()


function verificarToken(req,res,next) {

    const token = req.headers.authorization;

   

    if (!token) {

        return res.status(401).json({mensagem:"Token não fornecido", result:""})
    }
    
    try {
        
        const decodificar = jwt.verify(token,process.env.SENHA_TOKEN)

        req.user = decodificar 

        next()

    } catch (error) {
        
      return res.status(401).json({mensagem: "Token Invalido ou expirado", error })

    }

}

module.exports = verificarToken