const pool = require('../db/connection')



async function todosUsuarios(req, res) {
    try {
        const [result] = await pool.query('SELECT * FROM usuario')

        if (result.length === 0) {

            return res.status(404).json({ mensagem: 'Usuarios não encontrado', ok: false })

        }
        res.status(200).json({ mensagem: 'Usuarios encontrados', ok: true, resultado: result })

    } catch (error) {
        console.log(error);
        res.status(500).json({ ok: false, mensagem: 'Erro ao pesquisar usuarios', erro: error })


    }
}

async function pesquisarUsuario(req, res) {
    const { id } = req.params
    try {
        const [result] = await pool.query('SELECT * FROM usuario WHERE id_usuario = ?', [id])

        if (result.length === 0) {

            return res.status(404).json({ mensagem: 'Usuarios não encontrado', ok: false })
        }


        res.status(200).json({ mensagem: 'Usuarios encontrados', ok: true, resultado: result[0] })

    } catch (error) {
        console.log(error)
        res.status(500).json({ ok: false, mensagem: 'Erro ao pesquisar usuario', erro: error })
    }
}


async function buscarTrilhas(req, res) {

    try {
        const [result] = await pool.query('SELECT * FROM trilha')
        if (result.length === 0) {

            return res.status(404).json({ mensagem: 'Usuarios não encontrado', ok: false })

        }

        res.status(200).json({ mensagem: 'Usuarios encontrados', ok: true, resultado: result })

    } catch (error) {
        res.status(500).json({ ok: false, mensagem: 'Erro ao pesquisar usuario', erro: error })
    }
}

module.exports = {
    buscarTrilhas,
    pesquisarUsuario,
    todosUsuarios
}