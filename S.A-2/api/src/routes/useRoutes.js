const express = require('express')

const router = express.Router()

const {
    pesquisarUsuario,
    buscarTrilhas,
    todosUsuarios
} = require("../controllers/useControllers")



router.get('/usuario',todosUsuarios)

router.get('/usuario/:id',pesquisarUsuario)

router.get('/trilha',buscarTrilhas)

module.exports = router

