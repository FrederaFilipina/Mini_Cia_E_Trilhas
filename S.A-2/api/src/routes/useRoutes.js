const express = require('express')

const router = express.Router()

const {
    buscarTrilhas,
    loginUser
} = require("../controllers/useControllers")

router.get('/logar',loginUser)
 
router.get('/trilha',buscarTrilhas)

module.exports = router

