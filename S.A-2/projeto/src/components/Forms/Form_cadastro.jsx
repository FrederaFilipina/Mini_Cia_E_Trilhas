import React from 'react'
import { Mycontext } from '../../context/ContextGlobalUser'

function Form_cadastro() {

    const [nome, setnome] = React.useState('')
    const [emailCadastro, setEmailCadastro] = React.useState('');
    const [senhaCadastro, setSenhaCadastro] = React.useState('');
    const [cpf, setCpf] = React.useState('')

    return (

        <form className='form-cadastro cadastro'>
            <h1>Cadastro</h1>
            <input type="text" placeholder='Nome completo' value={nome} onChange={e => setnome(e.target.value)} />
            <input type="text" placeholder='E-mail' value={emailCadastro} onChange={e => setEmailCadastro(e.target.value)} />
            <input type="text" placeholder='CPF' value={cpf} onChange={e => setCpf(e.target.value)} />
            <input type="password" placeholder='Senha' value={senhaCadastro} onChange={e => setSenhaCadastro(e.target.value)} />
            <button>Cadastre-se</button>
        </form>

    )
}

export default Form_cadastro