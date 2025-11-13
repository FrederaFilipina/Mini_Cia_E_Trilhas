const pool = require('../db/connection')

const jwt = require('jsonwebtoken')

require("dotenv").config()



async function loginUser(req, res) {

   
    const { email, senha } = req.body

    try {


        const [result] = await pool.query('SELECT id_usuario, nome FROM usuario WHERE email = ? AND senha = ? ', [email, senha])

        if (result.length === 0) {
            return res.status(404).json({ mensagem: "usuario ou senha incorretos", result })
        }
        
        const payload = {
            id: result[0].id_usuario,
            nome: result[0].nome,
            role: 'user'
        }

        
        
        const token = jwt.sign(payload, process.env.SENHA_TOKEN, { expiresIn: '1h' })

        
        

        res.status(200).json({ mensagem: 'Usuario logado', result: {...result[0],token} })


    } catch (error) {

        console.error(error)

        return res.status(404).json({ mensagem: "erro ao tentar acessar o login", result: error })

    }

}

async function cadastroUser(req, res) {

    const { nome,email,cpf,senha,sexo } = req.body

    if (!nome,!email,!cpf,!senha,!sexo) {
       res.status(404).json({mensagem: "Todos os campos são obrigatórios"})
        
    }

    try {


        const [result] = await pool.query(`INSERT INTO usuario (nome, email, cpf, senha, sexo) VALUES (?,?,?,?,?)`, [nome,email,cpf,senha,sexo])

        

        res.status(200).json({ mensagem: 'Usuário Cadastrado', result: result})


    } catch (error) {

        console.error(error)

        return res.status(404).json({ mensagem: "Erro ao adicionar cliente", error })

    }

}


async function cardsHome(req, res) {

    try {

        const [result] = await pool.query(`
            SELECT evento.id_evento,trilha.nome AS 'Nome da Trilha', evento.dia AS 'Data', evento.horario AS 'Horário', (evento.vagas - COUNT(participante.id_participante)) AS 'Vagas Disp.' FROM evento
            JOIN trilha
            ON evento.trilha_id = trilha.id_trilha
            LEFT JOIN participante
            ON participante.evento_id = evento.id_evento
            GROUP BY trilha.nome, evento.dia, evento.horario, evento.vagas,evento.id_evento

            HAVING (evento.vagas - COUNT(participante.id_participante)) > 0
            AND evento.dia BETWEEN CURDATE() AND DATE_ADD(CURDATE(), INTERVAL 5 DAY)`)

        

        res.status(200).json({ mensagem: 'Cards para home', result: result})


    } catch (error) {

        console.error(error)

        return res.status(404).json({ mensagem: "Erro ao buscar cards", error })

    }

}



async function cardsAgendaOff(req, res) {

    try {

        const [result] = await pool.query(`
            SELECT evento.id_evento, trilha.nome AS 'Nome da Trilha', evento.dia AS 'Data', evento.horario AS 'Horário', (evento.vagas - COUNT(participante.id_participante)) AS 'Vagas Disp.' FROM evento
            JOIN trilha
            ON evento.trilha_id = trilha.id_trilha
            LEFT JOIN participante
            ON participante.evento_id = evento.id_evento
            GROUP BY trilha.nome, evento.dia, evento.horario, evento.vagas, evento.id_evento

            HAVING (evento.vagas - COUNT(participante.id_participante)) > 0
            AND CONCAT(evento.dia, ' ', evento.horario) >= NOW()
            ORDER BY evento.dia, evento.horario`)

        

        res.status(200).json({ mensagem: 'Cards para agenda off', result: result})


    } catch (error) {

        console.error(error)

        return res.status(404).json({ mensagem: "Erro ao buscar cards para agenda off", error })

    }

}



async function cardsTrilhaOff(req, res) {

    try {

        const [result] = await pool.query(`SELECT  trilha.id_trilha ,trilha.nome AS 'Nome da Trilha', trilha.distancia AS 'Distância', trilha.tempo AS 'Tempo', trilha.dificuldade AS 'Dificuldade' FROM trilha`)

        res.status(200).json({ mensagem: 'Cards para Trilha off', result: result})


    } catch (error) {

        console.error(error)

        return res.status(404).json({ mensagem: "Erro ao buscar cards", error })

    }

}

async function cardsTrilhaOn(req, res) {

    

    try {

        const [result] = await pool.query(`SELECT trilha.id_trilha ,trilha.nome AS 'Nome da Trilha', trilha.ponto_partida AS 'Ponto Inicial', trilha.ponto_chegada AS 'Ponto Final', trilha.distancia AS 'Distância', trilha.tempo AS 'Tempo', trilha.relevo AS 'Tipo do Relevo', trilha.elevacao AS 'Grau de Elevação', trilha.dificuldade AS 'Dificuldade' FROM trilha`)

        res.status(200).json({ mensagem: 'Cards para Trilha on', result: result})


    } catch (error) {

        console.error(error)

        return res.status(404).json({ mensagem: "Erro ao buscar cards", error })

    }

}


async function updateUserEmailTef(req, res) {

        const {email,celular,senha} = req.body
        const {id} = req.user

      
        
    try {

        const [result] = await pool.query(`UPDATE usuario SET num_celular = ?, email = ? WHERE id_usuario = ? AND senha = ?;`,[celular,email,id,senha])

        if (result.affectedRows===0) {
            
            res.status(400).json({mensagem:"Erro ao alterar senha ou dados invalidos", result })
            return

        }
        
       return res.status(200).json({ mensagem: 'Usuario Modificado', result: result})


    } catch (error) {

        console.error(error)

        return res.status(404).json({ mensagem: "Erro acessar update", error })

    }

}


async function buscarInfsUser(req, res) {

        const {id} = req.user

        
    try {

        const [result] = await pool.query(`SELECT nome, dt_nascimento, cpf, sexo, num_celular, email FROM usuario WHERE id_usuario = ?;`,[id])

        console.log(result);
        
        
       return res.status(200).json({ mensagem: 'Dados do usuario', result: result})


    } catch (error) {

        console.error(error)

        return res.status(404).json({ mensagem: "Erro acessar usuario logar novamente", error })

    }

}




module.exports = {
    loginUser,
    cadastroUser,
    cardsHome,
    cardsAgendaOff,
    cardsTrilhaOff,
    cardsTrilhaOn,
    updateUserEmailTef,
    buscarInfsUser
}