const express = require('express')

const router = express.Router()

const {buscarTrilhas,loginUser, cadastroUser,cardsHome,cardsAgendaOff,cardsTrilhaOff,cardsTrilhaOn} = require("../controllers/useControllers")

const {verificarToken} = require('../middleware/verificarToken')

router.get('/logar',loginUser)
 
router.get('/buscar/trilha',buscarTrilhas)

router.get('/buscar/cards/home',cardsHome)

router.get('/buscar/cards/agenda/off',cardsAgendaOff)

router.get('/buscar/cards/trilha/off',cardsTrilhaOff)

router.get('/buscar/cards/trilha/on',cardsTrilhaOn)

router.post('/cadastrar/usuario',cadastroUser)




module.exports = router

