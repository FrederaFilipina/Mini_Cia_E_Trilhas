const pool = require('../db/connection')

const jwt = require('jsonwebtoken')

require("dotenv").config()



async function loginUser(req, res) {


    const { email, senha } = req.body

    if (!email || !senha) {
        return res.status(400).json({ mensagem: "Todos os campos são obrigatórios" })

    }



    try {


        const [result] = await pool.query('SELECT id_usuario, nome FROM usuario WHERE email = ? AND senha = ? ', [email, senha])

        if (result.length === 0) {
            return res.status(401).json({ mensagem: "Email ou senha incorretos", result })
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

        return res.status(500).json({ mensagem: "erro ao tentar acessar o login", result: error })

    }

}

async function cadastroUser(req, res) {

    const { nome, email, cpf, senha, sexo } = req.body

    if (!nome || !email || !cpf || !senha || !sexo) {
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

        if (error.code === 'ER_DUP_ENTRY') {

            if (error.sqlMessage.includes('usuario.cpf')) {
                return res.status(400).json({ mensagem: "Este CPF já está cadastrado" })
            }

            if (error.sqlMessage.includes('usuario.email')) {
                return res.status(400).json({ mensagem: "Este email já está cadastrado" })
            }
        }

        return res.status(500).json({ mensagem: "Erro interno no servidor", error })

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

        if (result.length === 0) {

            return res.status(404).json({ mensagem: 'Nem um evento disponível no momento', result: result })

        }

        res.status(200).json({ mensagem: 'Cards para home', result: result })


    } catch (error) {

        console.error(error)

        return res.status(500).json({ mensagem: "Erro ao buscar cards", error })

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



        if (result.length === 0) {

            return res.status(404).json({ mensagem: 'Nem um evento disponível no momento', result: result })

        }
        return res.status(200).json({ mensagem: 'Cards para agenda off', result: result })


    } catch (error) {

        console.error(error)

        return res.status(500).json({ mensagem: "Erro ao buscar cards para agenda off", error })

    }

}

async function cardsAgendaOn(req, res) {

    const { id } = req.user


    try {

        const [result] = await pool.query(`
            SELECT 
	            evento.id_evento,
                trilha.nome AS 'nomeTrilha',
                evento.dia AS 'data',
                evento.horario AS 'horário',
                (evento.vagas - COUNT(participante.id_participante)) AS 'vagasDisp'
            FROM evento
            JOIN trilha
                ON evento.trilha_id = trilha.id_trilha

            LEFT JOIN participante
                ON participante.evento_id = evento.id_evento


            LEFT JOIN participante p_user
                ON p_user.evento_id = evento.id_evento
                AND p_user.usuario_id = ?

            WHERE 
                evento.condicao = 'Ativo'
                AND p_user.usuario_id IS NULL  

            GROUP BY 
                evento.id_evento,trilha.nome, evento.dia, evento.horario, evento.vagas

            HAVING 
                (evento.vagas - COUNT(participante.id_participante)) > 0
                AND CONCAT(evento.dia, ' ', evento.horario) >= NOW()

            ORDER BY evento.dia, evento.horario`, [id])



        if (result.length === 0) {

            return res.status(404).json({ mensagem: 'Nem um evento disponível no momento', result: result })

        }
        return res.status(200).json({ mensagem: 'Cards para agenda on', result: result })


    } catch (error) {

        console.error(error)

        return res.status(500).json({ mensagem: "Erro ao buscar cards para agenda on", error })

    }

}

async function cardsTrilhaOff(req, res) {

    try {

        const [result] = await pool.query(`SELECT  trilha.id_trilha ,trilha.nome AS 'nomeTrilha', trilha.distancia AS 'distância', trilha.tempo AS 'tempo', trilha.dificuldade AS 'dificuldade' FROM trilha`)

        if (result.length === 0) {

            return res.status(404).json({ mensagem: 'Não foi encontrado trilhas', result: result })

        }

        return res.status(200).json({ mensagem: 'Cards para Trilha off', result: result })


    } catch (error) {

        console.error(error)

        return res.status(500).json({ mensagem: "Erro ao buscar cards", error })

    }

}

async function cardsTrilhaOn(req, res) {



    try {

        const [result] = await pool.query(`SELECT trilha.id_trilha ,trilha.nome AS 'nomeTrilha', trilha.ponto_partida AS 'pontoInicial', trilha.ponto_chegada AS 'pontoFinal', trilha.distancia AS 'distância', trilha.tempo AS 'tempo', trilha.relevo AS 'tipoRelevo', trilha.elevacao AS 'grauElevação', trilha.dificuldade AS 'dificuldade' FROM trilha`)

        if (result.length === 0) {

            return res.status(404).json({ mensagem: 'Não foi encontrado trilhas', result: result })

        }

        return res.status(200).json({ mensagem: 'Cards para Trilha on', result: result })


    } catch (error) {

        console.error(error)

        return res.status(500).json({ mensagem: "Erro ao buscar cards", error })

    }

}

async function updateUserEmailTef(req, res) {

    const { email, celular, senha } = req.body
    const { id } = req.user

    if (!email || !celular || !senha) {
        return res.status(404).json({ mensagem: "Todos os campos são obrigatórios" })

    }


    try {

        const [result] = await pool.query(`UPDATE usuario SET num_celular = ?, email = ? WHERE id_usuario = ? AND senha = ?;`, [celular, email, id, senha])

        if (result.affectedRows === 0) {

            res.status(401).json({ mensagem: "Senha invalida ou dados incorretos", result })
            return

        }

        return res.status(200).json({ mensagem: 'Usuário Modificado', result: result })


    } catch (error) {

        console.error(error)

        if (error.code) {
            if (error.sqlMessage.includes('usuario.email')) {
                return res.status(400).json({ mensagem: "Este email já está cadastrado" })
            }

            if (error.sqlMessage.includes('usuario.num_celular')) {
                return res.status(400).json({ mensagem: "Este numero já está cadastrado" })
            }

        }

        return res.status(500).json({ mensagem: "Erro acessar update", error })

    }

}

async function buscarInfsUser(req, res) {

    const { id } = req.user


    try {

        const [result] = await pool.query(`SELECT nome, dt_nascimento, cpf, sexo, num_celular, email FROM usuario WHERE id_usuario = ?;`, [id])

        if (result.length === 0) {
            return res.status(404).json({ mensagem: 'Dados do usuário não encontrado', result: result })
        }

        return res.status(200).json({ mensagem: 'Dados do usuário', result: result[0] })


    } catch (error) {

        console.error(error)

        return res.status(500).json({ mensagem: "Erro ao acessar usuário,logar novamente", error })

    }

}

async function mudarSenha(req, res) {

    const { id } = req.user

    const { senha, novaSenha } = req.body

    if (!senha || !!novaSenha) {
        return res.status(404).json({ mensagem: "Todos os campos são obrigatórios" })

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

        if (error.code) {

            res.status(400).json({ mensagem: "Erro de insert", error: error.sqlMessage })

        }

        return res.status(500).json({ mensagem: "Erro acessar ao tentar acessar troca de senha", error })

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

        return res.status(500).json({ mensagem: "Erro acessar Deletar usuário", error })

    }

}


async function cadastrarEvento(req, res) {

    const { dia, horario, ponto_de_encontro, vagas, trilha_id } = req.body

    const { id } = req.user

    if (!dia || !horario || !ponto_de_encontro || !vagas || !trilha_id) {
        return res.status(400).json({ mensagem: "Todos os campos são obrigatórios" })

    }

    try {


        const [resultEventoCriado] = await pool.query(`INSERT INTO evento (dia, horario, ponto_de_encontro, vagas, trilha_id) VALUES (?,?,?,?,?)`, [dia, horario, ponto_de_encontro, vagas, trilha_id])

        if (resultEventoCriado.affectedRows === 0) {

            return res.status(400).json({ mensagem: "Erro ao criar evento", error: resultEventoCriado })
        }


        const [resultCriador] = await pool.query("INSERT INTO participante (classe, usuario_id, evento_id) VALUES('C',?,?)", [id, resultEventoCriado.insertId])

        if (resultCriador.affectedRows === 0) {

            const [deletarEvento] = await pool.query("DELETE FROM evento WHERE id_evento = ?", [resultEventoCriado.insertId])

            if (deletarEvento.affectedRows === 0) {
                return res.status(500).json({ mensagem: "Fudeooooo!!!" })

            }

            return res.status(500).json({ mensagem: "Erro ao adicionar criador do evento", error: resultCriador })
        }

        res.status(200).json({ mensagem: 'Evento agendado com sucesso', result: resultEventoCriado })


    } catch (error) {

        console.error(error)

        if (error.code) {

            if (error.sqlMessage) {
                return res.status(400).json({ mensagem: error.sqlMessage, error })
            }
        }

        return res.status(500).json({ mensagem: "Erro ao acessar criação de evento", error })

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

        return res.status(500).json({ mensagem: "Erro ao tentar acessar a requisição de encerramento", error })


    }

}

async function alterarEvento(req, res) {

    const { id } = req.user

    const { dia, horario, ponto_de_encontro, vagas } = req.body

    const { idevento } = req.params

    if (idevento.length === 0) {
        return res.status(400).json({ mensagem: "Evento não informado!" })
    }
    if (!dia || !horario || !ponto_de_encontro || !vagas) {
        return res.status(404).json({ mensagem: "Todos os campos são obrigatórios" })

    }


    try {
        const [result] = await pool.query(`UPDATE evento
                                            JOIN participante ON evento.id_evento = participante.evento_id
                                            SET dia = ?, horario = ?, ponto_de_encontro = ?, vagas = ?  WHERE evento.id_evento = ? AND participante.usuario_id = ?  AND  participante.classe = 'C'  ;
                                            `, [dia, horario, ponto_de_encontro, vagas, idevento, id])

        if (result.affectedRows === 0) {

            return res.status(403).json({ mensagem: "Usuário nao tem permissão ou evento não encontrado" })

        }

        return res.status(200).json({ mensagem: 'Evento Atualizado com sucesso', result })
    } catch (error) {

        console.error(error);

        if (error.code) {
            if (error.sqlMessage) {
                return res.status(400).json({ mensagem: error.sqlMessage })
            }
        }

        return res.status(500).json({ mensagem: "Erro ao tentar acessar a requisição de alteração", error })


    }

}


async function buscarEvento(req, res) {

    const { id } = req.params


    try {

        const [result] = await pool.query(`SELECT 
                evento.id_evento,
                evento.dia,
                evento.horario AS horario,
                evento.ponto_de_encontro AS pontoEncontro,
                evento.vagas AS vagas,
                trilha.nome AS nomeTrilha,
                trilha.ponto_partida,
                trilha.ponto_chegada,
                trilha.dificuldade,
                trilha.distancia
            FROM evento
            JOIN trilha 
            ON trilha.id_trilha = evento.trilha_id
			WHERE id_evento = ?`, [id])

        if (result.length === 0) {

            return res.status(404).json({ mensagem: 'evento não encontrado', result: result })

        }

        const [usuarios] = await pool.query(`
            SELECT 
            usuario.id_usuario ,participante.classe, usuario.nome
            FROM participante 
            JOIN usuario ON usuario.id_usuario = participante.usuario_id
            WHERE evento_id =?`, [id])


        if (usuarios.length === 0) {
            return res.status(404).json({ mensagem: 'Participantes do evento não encontrado', result: result[0] })
        }

        result[0].participantes = usuarios

        return res.status(200).json({ mensagem: 'Dados evento ', result: result })


    } catch (error) {

        console.error(error)

        return res.status(500).json({ mensagem: "Erro buscar evento", error })

    }

}


async function deletarEvento(req, res) {

    const { id } = req.user

    const { idevento } = req.params

    if (!idevento) {

        return res.status(400).json({ mensagem: "Evento não informado!" })
    }

    try {

        const [resultDeleteParticipante] = await pool.query(`  
    DELETE p
    FROM participante p
    JOIN participante autorizador
    ON autorizador.evento_id = p.evento_id
    WHERE p.evento_id = ?
    AND autorizador.usuario_id = ?
    AND autorizador.classe = 'C'`, [idevento, id])

        if (resultDeleteParticipante.affectedRows === 0) {

            return res.status(400).json({ mensagem: "Nao foi possível deletar o evento", error: resultDeleteParticipante })

        }

        const [resultDeletarEvento] = await pool.query('DELETE FROM evento WHERE id_evento = ?', [idevento])


        if (resultDeletarEvento.affectedRows === 0) {

            res.status(404).json({ mensagem: "Evento nao foi cancelado, tente mas tarde" })

        }


        return res.status(200).json({ mensagem: "Evento foi cancelado com sucesso" })

    } catch (error) {

        console.error(error);

        return res.status(404).json({ mensagem: "Erro ao tentar acessar a função de excluir evento", error })

    }
}


async function participarEvento(req, res) {

    const { id } = req.user

    const { idevento } = req.params

    if (idevento.length === 0) {
        return res.status(400).json({ mensagem: "Evento não informado!" })
    }



    try {

        const [verificacaoParticipante] = await pool.query(`SELECT 
            usuario.id_usuario ,participante.classe, usuario.nome
            FROM participante 
            JOIN usuario ON usuario.id_usuario = participante.usuario_id
            WHERE evento_id =?  AND usuario_id = ?`, [idevento, id])



        if (verificacaoParticipante.length > 0) {

            return res.status(401).json({ mensagem: "Você ja esta participando do evento" })

        }


        const [result] = await pool.query(`
            INSERT INTO participante 
            (classe, usuario_id, evento_id) 
            VALUES('C',?,?)`, [id, idevento])

        if (result.affectedRows === 0) {

            return res.status(403).json({ mensagem: "Não foi possível participar do evento" })

        }

        return res.status(200).json({ mensagem: 'Você foi adicionado ao evento', result })
    } catch (error) {

        console.error(error);

        return res.status(500).json({ mensagem: "Erro ao tentar acessar a requisição de participação", error })


    }

}

async function buscarMinhaAgenda(req, res) {

    const { id } = req.user


    try {

        const [result] = await pool.query(`
           SELECT 
	            evento.id_evento,
                trilha.nome AS 'nomeTrilha',
                evento.dia AS 'data',
                evento.horario AS 'horário',
                (evento.vagas - COUNT(participante.id_participante)) AS 'vagasDisp'
            FROM evento
            JOIN trilha
                ON evento.trilha_id = trilha.id_trilha

            LEFT JOIN participante
                ON participante.evento_id = evento.id_evento


            JOIN participante p_user
                ON p_user.evento_id = evento.id_evento
                AND p_user.usuario_id = ?
            WHERE 
                evento.condicao = 'Ativo'

            GROUP BY 
                evento.id_evento,trilha.nome, evento.dia, evento.horario, evento.vagas

            HAVING 
                (evento.vagas - COUNT(participante.id_participante)) >= 0
                AND CONCAT(evento.dia, ' ', evento.horario) >= NOW()

            ORDER BY evento.dia, evento.horario`, [id])



        if (result.length === 0) {

            return res.status(404).json({ mensagem: 'Sem eventos agendados no momento', result: result })

        }
        return res.status(200).json({ mensagem: 'Cards para Minha agenda', result: result })


    } catch (error) {

        console.error(error)

        return res.status(500).json({ mensagem: "Erro ao buscar cards para minha agenda", error })

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
    deletarEvento,
    buscarEvento,
    participarEvento,
    cardsAgendaOn,
    buscarMinhaAgenda

}