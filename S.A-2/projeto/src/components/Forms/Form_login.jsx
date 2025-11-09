import React from 'react'
import login from '../../server/login'

function Form_login() {

    async function logar(e) {
        e.preventDefault()

        const dados = {
            email: email,
            senha: senha
        }
        const resposta = await login(dados)
        console.log(resposta);

    }
    
    const [email, setEmail] = React.useState('')
    const [senha, setsenha] = React.useState('')

    return (
        
        <form className='form-login'>
            <h1>Bem vindo de volta!</h1>
            <input type="text" placeholder='E-mail' value={email} onChange={e => setEmail(e.target.value)} />
            <input type="password" placeholder='Senha' value={senha} onChange={e => setsenha(e.target.value)} />
            <a href="#">Esqueceu sua senha?</a>
            <button onClick={logar}>Logar</button>
        </form>

    )
}

export default Form_login