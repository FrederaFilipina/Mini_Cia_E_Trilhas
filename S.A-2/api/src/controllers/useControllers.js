const pool = require('../db/connection')

const jwt = require('jsonwebtoken')



async function buscarTrilhas(req, res) {

    try {
        const [result] = await pool.query('SELECT * FROM trilha')
        if (result.length === 0) {

            return res.status(404).json({ mensagem: 'Usuarios não encontrado', ok: false })

        }

        res.status(200).json({ mensagem: 'Usuarios encontrados', resultado: result })

    } catch (error) {
        res.status(500).json({  mensagem: 'Erro ao pesquisar usuario', erro: error })
    }
}

async function loginUser(req, res) {

    const secretToken = 'testando'
    const { email, senha } = req.body

    try {


        const [result] = await pool.query('SELECT id_usuario, nome FROM usuario WHERE email = ? AND senha = ? ', [email, senha])

        if (result.length === 0) {
            return res.status(404).json({ mensagem: "usuario ou senha incorretos", result })
        }

        const payload = {
            id: result[0].id,
            nome: result[0].nome,
            role: 'user'
        }


        const token = jwt.sign(payload, secretToken, { expiresIn: '1h' })

        res.status(200).json({ mensagem: 'Usuario logado', result: {...result[0],token} })


    } catch (error) {

        console.error(error)

        return res.status(404).json({ mensagem: "erro ao tentar acessar o login", result: error })

    }

}

async function cadastroUser(req, res) {

    const { email, senha } = req.body

    try {


        const [result] = await pool.query('SELECT id_usuario, nome FROM usuario WHERE email = ? AND senha = ? ', [email, senha])

        if (result.length === 0) {
            return res.status(404).json({ mensagem: "usuario ou senha incorretos", result })
        }

        

        res.status(200).json({ mensagem: 'Usuario logado', result: result[0] })


    } catch (error) {

        console.error(error)

        return res.status(404).json({ mensagem: "erro ao tentar acessar o login", result: error })

    }

}


// INSERT INTO usuario
// (nome, email, cpf, senha, sexo)
// VALUES
// ();

module.exports = {
    buscarTrilhas,
    loginUser
}