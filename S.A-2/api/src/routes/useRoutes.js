const express = require('express')

const router = express.Router()

const {loginUser, cadastroUser,cardsHome,cardsAgendaOff,cardsTrilhaOff,cardsTrilhaOn,updateUserEmailTef,buscarInfsUser,deletarUser, mudarSenha} = require("../controllers/useControllers")

const verificarToken = require('../middleware/verificarToken')

router.post('/logar',loginUser)
 

router.get('/buscar/cards/home',cardsHome)

router.get('/buscar/cards/agenda/off',cardsAgendaOff)

router.get('/buscar/cards/trilha/off',cardsTrilhaOff)

router.get('/buscar/cards/trilha/on',verificarToken,cardsTrilhaOn)

router.post('/cadastrar/usuario',cadastroUser)

router.put('/modificar/user/dados',verificarToken,updateUserEmailTef)

router.put("/modificar/senha/user",verificarToken,mudarSenha)

router.get('/buscar/dados/user',verificarToken,buscarInfsUser)

router.delete('/deletar/user',verificarToken,deletarUser)




module.exports = router

