const pool = require('../db/connection')

const jwt = require('jsonwebtoken')

require("dotenv").config()



async function loginUser(req, res) {


    const { email, senha } = req.body

    if (!email|| !senha) {
       return res.status(400).json({ mensagem: "Todos os campos são obrigatórios" })

    }



    try {


        const [result] = await pool.query('SELECT id_usuario, nome FROM usuario WHERE email = ? AND senha = ? ', [email, senha])

        if (result.length === 0) {
            return res.status(400).json({ mensagem: "usuario ou senha incorretos", result })
        }

        const payload = {
            id: result[0].id_usuario,
            nome: result[0].nome,
            role: 'user'
        }



        const token = jwt.sign(payload, process.env.SENHA_TOKEN, { expiresIn: '1h' })




        res.status(200).json({ mensagem: 'Usuario logado', result: { ...result[0], token } })


    } catch (error) {

        console.error(error)

        return res.status(404).json({ mensagem: "erro ao tentar acessar o login", result: error })

    }

}

async function cadastroUser(req, res) {

    const { nome, email, cpf, senha, sexo } = req.body

    if (!nome|| !email|| !cpf|| !senha|| !sexo) {
       return res.status(400).json({ mensagem: "Todos os campos são obrigatórios" })

    }

    try {


        const [result] = await pool.query(`INSERT INTO usuario (nome, email, cpf, senha, sexo) VALUES (?,?,?,?,?)`, [nome, email, cpf, senha, sexo])

        console.log(result);

        if (result.affectedRows !== 0) {

            return res.status(200).json({ mensagem: 'Usuário Cadastrado', result: result })

        }

        return res.status(404).json({ mensagem: "Erro ao adicionar cliente", result })



    } catch (error) {

        console.error(error)

        return res.status(404).json({ mensagem: "Erro ao adicionar cliente", error })

    }

}

async function cardsHome(req, res) {

    try {

        const [result] = await pool.query(`
            SELECT evento.id_evento, trilha.nome AS 'nomeTrilha', evento.dia AS 'data', evento.horario AS 'horário', (evento.vagas - COUNT(participante.id_participante)) AS 'vagasDisp' FROM evento
            JOIN trilha
            ON evento.trilha_id = trilha.id_trilha
            LEFT JOIN participante
            ON participante.evento_id = evento.id_evento
            GROUP BY trilha.nome, evento.dia, evento.horario, evento.vagas,evento.id_evento

            HAVING (evento.vagas - COUNT(participante.id_participante)) > 0
            AND evento.dia BETWEEN CURDATE() AND DATE_ADD(CURDATE(), INTERVAL 5 DAY)`)



        res.status(200).json({ mensagem: 'Cards para home', result: result })


    } catch (error) {

        console.error(error)

        return res.status(404).json({ mensagem: "Erro ao buscar cards", error })

    }

}

async function cardsAgendaOff(req, res) {

    try {

        const [result] = await pool.query(`
            SELECT evento.id_evento,trilha.nome AS 'nomeTrilha', evento.dia AS 'data', evento.horario AS 'horário', (evento.vagas - COUNT(participante.id_participante)) AS 'vagasDisp' FROM evento
            JOIN trilha
            ON evento.trilha_id = trilha.id_trilha
            LEFT JOIN participante
            ON participante.evento_id = evento.id_evento
            GROUP BY trilha.nome, evento.dia, evento.horario, evento.vagas, evento.id_evento

            HAVING (evento.vagas - COUNT(participante.id_participante)) > 0
            AND CONCAT(evento.dia, ' ', evento.horario) >= NOW()
            ORDER BY evento.dia, evento.horario`)



        return res.status(200).json({ mensagem: 'Cards para agenda off', result: result })


    } catch (error) {

        console.error(error)

        return res.status(404).json({ mensagem: "Erro ao buscar cards para agenda off", error })

    }

}

async function cardsTrilhaOff(req, res) {

    try {

        const [result] = await pool.query(`SELECT  trilha.id_trilha ,trilha.nome AS 'nomeTrilha', trilha.distancia AS 'distância', trilha.tempo AS 'tempo', trilha.dificuldade AS 'dificuldade' FROM trilha`)

        return res.status(200).json({ mensagem: 'Cards para Trilha off', result: result })


    } catch (error) {

        console.error(error)

        return res.status(404).json({ mensagem: "Erro ao buscar cards", error })

    }

}

async function cardsTrilhaOn(req, res) {



    try {

        const [result] = await pool.query(`SELECT trilha.id_trilha ,trilha.nome AS 'nomeTrilha', trilha.ponto_partida AS 'pontoInicial', trilha.ponto_chegada AS 'pontoFinal', trilha.distancia AS 'distância', trilha.tempo AS 'tempo', trilha.relevo AS 'tipoRelevo', trilha.elevacao AS 'grauElevação', trilha.dificuldade AS 'dificuldade' FROM trilha`)

        return res.status(200).json({ mensagem: 'Cards para Trilha on', result: result })


    } catch (error) {

        console.error(error)

        return res.status(404).json({ mensagem: "Erro ao buscar cards", error })

    }

}

async function updateUserEmailTef(req, res) {

    const { email, celular, senha } = req.body
    const { id } = req.user

    if (!email|| !celular|| !senha) {
       return res.status(404).json({ mensagem: "Todos os campos são obrigatórios" })

    }


    try {

        const [result] = await pool.query(`UPDATE usuario SET num_celular = ?, email = ? WHERE id_usuario = ? AND senha = ?;`, [celular, email, id, senha])

        if (result.affectedRows === 0) {

            res.status(400).json({ mensagem: "Senha invalida ou dados incorretos", result })
            return

        }

        return res.status(200).json({ mensagem: 'Usuario Modificado', result: result })


    } catch (error) {

        console.error(error)

        return res.status(404).json({ mensagem: "Erro acessar update", error })

    }

}

async function buscarInfsUser(req, res) {

    const { id } = req.user


    try {

        const [result] = await pool.query(`SELECT nome, dt_nascimento, cpf, sexo, num_celular, email FROM usuario WHERE id_usuario = ?;`, [id])

        if (result.length === 0) {
            return res.status(400).json({ mensagem: 'Dados do usuário não encontrado', result: result[0] })
        }

        return res.status(200).json({ mensagem: 'Dados do usuário', result: result[0] })


    } catch (error) {

        console.error(error)

        return res.status(404).json({ mensagem: "Erro ao acessar usuário,logar novamente", error })

    }

}

async function mudarSenha(req, res) {

    const { id } = req.user

    const { senha, novaSenha } = req.body

    if (!senha || !!novaSenha) {
      return  res.status(404).json({ mensagem: "Todos os campos são obrigatórios" })
        
    }

    try {

        const [result] = await pool.query(`UPDATE usuario SET senha = ? WHERE id_usuario = ? AND senha = ?`, [novaSenha, id, senha])

        if (result.affectedRows === 0) {

            res.status(400).json({ mensagem: "Senha atual esta errada", result })
            return

        }

        return res.status(200).json({ mensagem: 'Senha modificada', result: result })


    } catch (error) {

        console.error(error)

        return res.status(404).json({ mensagem: "Erro acessar ao tentar acessar troca de senha", error })

    }

}


async function deletarUser(req, res) {

    const { id } = req.user


    try {

        const [result] = await pool.query(`DELETE FROM participante WHERE usuario_id = ?`, [id])

        const [resultadoUsuario] = await pool.query('DELETE FROM usuario WHERE id_usuario = ?;', [id])



        if (resultadoUsuario.affectedRows === 0) {


            return res.status(400).json({ mensagem: "Erro ao deletar usuário", result })
        }

        return res.status(200).json({ mensagem: 'Usuário deletado', result: result })



    } catch (error) {

        console.error(error)

        return res.status(404).json({ mensagem: "Erro acessar Deletar usuário", error })

    }

}


async function cadastrarEvento(req, res) {

    const { dia, horario, ponto_de_encontro, vagas, trilha_id } = req.body

    const { id } = req.user

    if (!dia|| !horario|| !ponto_de_encontro|| !vagas|| !trilha_id) {
       return res.status(404).json({ mensagem: "Todos os campos são obrigatórios" })

    }

    try {


        const [resultEventoCriado] = await pool.query(`INSERT INTO evento (dia, horario, ponto_de_encontro, vagas, trilha_id) VALUES (?,?,?,?,?)`, [dia, horario, ponto_de_encontro, vagas, trilha_id])

        if (resultEventoCriado.affectedRows === 0) {

            return res.status(404).json({ mensagem: "Erro ao criar evento", error: resultEventoCriado })
        }


        const [resultCriador] = await pool.query("INSERT INTO participante (classe, usuario_id, evento_id) VALUES('C',?,?)", [id, resultEventoCriado.insertId])

        if (resultCriador.affectedRows === 0) {

            const [deletarEvento] = await pool.query("DELETE FROM evento WHERE id_evento = ?", [resultEventoCriado.insertId])

            if (deletarEvento.affectedRows === 0) {
                return res.status(404).json({ mensagem: "Fudeooooo!!!" })

            }

            return res.status(404).json({ mensagem: "Erro ao adicionar criador do evento", error: resultCriador })
        }

        res.status(200).json({ mensagem: 'Evento agendado com sucesso', result: result })


    } catch (error) {

        console.error(error)

        return res.status(404).json({ mensagem: "Erro ao acessar criação de evento", error })

    }
}


async function concluriEvento(req, res) {

    const { id } = req.user

    const { idevento } = req.params

    if (idevento.length === 0) {
       return res.status(400).json({ mensagem: "Evento não informado!" })
    }


    try {
        const [result] = await pool.query(`UPDATE evento
                                            JOIN participante ON evento.id_evento = participante.evento_id
                                            SET evento.condicao = 'Concluido'  WHERE evento.id_evento = ? AND participante.usuario_id = ?  AND  participante.classe = 'C'  ;
                                            `, [idevento, id])

        if (result.affectedRows === 0) {

            return res.status(403).json({ mensagem: "Usuário nao tem permissão ou evento não encontrado" })

        }

        return res.status(200).json({ mensagem: 'Evento encerrado com sucesso', result })
    } catch (error) {

        console.error(error);

        return res.status(404).json({ mensagem: "Erro ao tentar acessar a requisição de encerramento", error })


    }

}

async function alterarEvento(req, res) {

    const { id } = req.user

    const {dia,horario,ponto_de_encontro,vagas} = req.body

    const { idevento } = req.params

    if (idevento.length === 0) {
       return res.status(400).json({ mensagem: "Evento não informado!" })
    }
     if (!dia ||!horario|| !ponto_de_encontro|| !vagas) {
       return res.status(404).json({ mensagem: "Todos os campos são obrigatórios" })

    }


    try {
        const [result] = await pool.query(`UPDATE evento
                                            JOIN participante ON evento.id_evento = participante.evento_id
                                            SET dia = ?, horario = ?, ponto_de_encontro = ?, vagas = ?  WHERE evento.id_evento = ? AND participante.usuario_id = ?  AND  participante.classe = 'C'  ;
                                            `, [dia,horario,ponto_de_encontro,vagas,idevento, id])

        if (result.affectedRows === 0) {

            return res.status(403).json({ mensagem: "Usuário nao tem permissão ou evento não encontrado" })

        }

        return res.status(200).json({ mensagem: 'Evento Atualizado com sucesso', result })
    } catch (error) {

        console.error(error);

        return res.status(404).json({ mensagem: "Erro ao tentar acessar a requisição de alteração", error })


    }

}


async function deletarEvento(req,res) {
    
    const {id} = req.user

    const {idevento} = req.params

    if (!idevento ) {

        return res.status(400).json({mensagem: "Evento não informado!"})
    }

    try {
        
        const [resultDeleteParticipante] = await pool.query(`  
    DELETE p
    FROM participante p
    JOIN participante autorizador
    ON autorizador.evento_id = p.evento_id
    WHERE p.evento_id = ?
    AND autorizador.usuario_id = ?
    AND autorizador.classe = 'C'`,[idevento,id])

        if (resultDeleteParticipante.affectedRows===0) {

            return res.status(400).json({mensagem:"Nao foi possível deletar o evento", error:resultDeleteParticipante})
    
        }

        const [resultDeletarEvento] = await pool.query('DELETE FROM evento WHERE id_evento = ?',[idevento])


        if (resultDeletarEvento.affectedRows===0) {

            res.status(404).json({mensagem:"Evento nao foi cancelado, tente mas tarde"})
            
        }


        return res.status(200).json({mensagem:"Evento foi cancelado com sucesso"})

    } catch (error) {

        console.error(error);

        return res.status(404).json({mensagem:"Erro ao tentar acessar a função de excluir evento", error})
        
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
    buscarInfsUser,
    mudarSenha,
    deletarUser,
    cadastrarEvento,
    concluriEvento,
    alterarEvento,
    deletarEvento

}