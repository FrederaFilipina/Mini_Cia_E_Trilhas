const express = require('express')

const router = express.Router()

const {loginUser, cadastroUser,cardsHome,cardsAgendaOff,cardsTrilhaOff,cardsTrilhaOn,updateUserEmailTef,buscarInfsUser,deletarUser, mudarSenha,cadastrarEvento,concluriEvento,alterarEvento,deletarEvento,buscarEvento,participarEvento,cardsAgendaOn,buscarMinhaAgenda} = require("../controllers/useControllers")

const verificarToken = require('../middleware/verificarToken')

// cadastrar
router.post('/cadastrar/usuario',cadastroUser)

router.post('/cadastrar/evento',verificarToken,cadastrarEvento)



// fazer login
router.post('/logar',loginUser)
 


// buscar Infos
router.get('/buscar/cards/home',cardsHome)

router.get('/buscar/cards/agenda/off',cardsAgendaOff)

router.get('/buscar/cards/agenda/on',verificarToken,cardsAgendaOn)

router.get('/buscar/cards/agenda/user',verificarToken,buscarMinhaAgenda)

router.get('/buscar/cards/trilha/off',cardsTrilhaOff)

router.get('/buscar/cards/trilha/on',verificarToken,cardsTrilhaOn)

router.get('/buscar/dados/user',verificarToken,buscarInfsUser)

router.get('/buscar/dados/agenda/id/:id',verificarToken,buscarEvento)



// modificar infos
router.put('/modificar/user/dados',verificarToken,updateUserEmailTef)

router.put("/modificar/senha/user",verificarToken,mudarSenha)

router.put('/modificar/evento/concluir/id/:idevento',verificarToken,concluriEvento)

router.put('/modificar/evento/atualizar/id/:idevento',verificarToken,alterarEvento)

router.post("/participar/evento/id/:idevento",verificarToken,participarEvento)


// deletar infos
router.delete('/deletar/user',verificarToken,deletarUser)

router.delete('/deletar/evento/id/:idevento',verificarToken,deletarEvento)






module.exports = router

