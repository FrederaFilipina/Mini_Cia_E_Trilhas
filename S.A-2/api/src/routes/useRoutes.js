const express = require('express')

const router = express.Router()

const {loginUser, cadastroUser,cardsHome,cardsAgendaOff,cardsTrilhaOff,cardsTrilhaOn,updateUserEmailTef,buscarInfsUser,deletarUser, mudarSenha,cadastrarEvento,concluriEvento,alterarEvento,deletarEvento} = require("../controllers/useControllers")

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

router.post('/cadastrar/evento',verificarToken,cadastrarEvento)

router.put('/modificar/evento/concluir/id/:idevento',verificarToken,concluriEvento)

router.put('/modificar/evento/atualizar/id/:idevento',verificarToken,alterarEvento)

router.delete('/deletar/evento/id/:idevento',verificarToken,deletarEvento)






module.exports = router

