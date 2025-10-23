const mysql = require('mysql2/promise')

const express = require('express')

const cors = require('cors')

const app = express()

const port = 3000

app.use(express.json())

app.use(cors())

const conction = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password:'senai',
    database:'mini_cia_e_trilhas',
    waitForConnections: true,
    connectionLimit:10,
    queueLimit:0
})

app.get('/usuario', async (req,res)=>{
    try {
        const [result] = await conction.query('SELECT * FROM usuario')

        if (result.length===0) {

           return res.status(404).json({mensagem:'Usuarios não encontrado',ok:false})

        }
        res.status(200).json({mensagem:'Usuarios encontrados',ok:true, resultado:result})
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ok:false,mensagem:'Erro ao pesquisar usuarios',erro:error})
        
        
    }
})

app.get('/usuario/:id', async (req,res)=>{
    const {id} = req.params
    try {
        const [result] = await conction.query('SELECT * FROM usuario WHERE id_usuario = ?',[id])

        if(result.length===0){

            return res.status(404).json({mensagem:'Usuarios não encontrado',ok:false})
        }

        
        res.status(200).json({mensagem:'Usuarios encontrados',ok:true, resultado:result[0]})

    } catch (error) {
        console.log(error)
        res.status(500).json({ok:false,mensagem:'Erro ao pesquisar usuario',erro:error})
    }
} )

app.get('/trilha', async (req,res)=>{

    try {
        const [result]= await conction.query('SELECT * FROM trilha')
        if (result.length===0) {

            return res.status(404).json({mensagem:'Usuarios não encontrado',ok:false})
            
        }

        res.status(200).json({mensagem:'Usuarios encontrados',ok:true, resultado:result})

    } catch (error) {
        res.status(500).json({ok:false,mensagem:'Erro ao pesquisar usuario',erro:error})
    }
})





app.listen(port,()=> console.log("Conectado ao banco")
)