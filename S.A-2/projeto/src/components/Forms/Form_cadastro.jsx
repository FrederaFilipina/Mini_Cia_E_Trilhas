import React, { useContext } from 'react'
import { Mycontext } from '../../context/ContextGlobalUser'
import cadastro from '../../server/inserirDados/cadastro';

function Form_cadastro() {

    const [nome, setnome] = React.useState('')
    const [emailCadastro, setEmailCadastro] = React.useState('');
    const [senhaCadastro, setSenhaCadastro] = React.useState('');
    const [cpf, setCpf] = React.useState('')
    const [sexo, setSexo] = React.useState('');
    const { isActive, setIsActive } = useContext(Mycontext);

    async function cadastrar(e) {
        e.preventDefault()

        const dados = {
            nome: nome,
            email: emailCadastro,
            senha: senhaCadastro,
            cpf: cpf,
            sexo: sexo
        }
        const resposta = await cadastro(dados)
        if (resposta.status === 200) {
            alert("Cadastro realizado com sucesso!")
            setIsActive(false)
            setnome('')
            setEmailCadastro('')
            setSenhaCadastro('')
            setCpf('')
            setSexo('')
            return
        }
        if (!resposta.ok) {

            alert(resposta.mensagem)
            
        }

    }





    return (

        <form className='form-cadastro cadastro'>
            <h1>Cadastro</h1>

            <input type="text" placeholder='Nome completo' value={nome} onChange={e => setnome(e.target.value)} />
            <input type="text" placeholder='E-mail' value={emailCadastro} onChange={e => setEmailCadastro(e.target.value)} />
            <input type="text" placeholder='CPF' value={cpf} onChange={e => setCpf(e.target.value)} />
            <input type="password" placeholder='Senha' value={senhaCadastro} onChange={e => setSenhaCadastro(e.target.value)} />
            <span></span>

            <div className='const-label-sexo'>

            <label className='label-sexo'>
                <input type="radio" name='sexo' checked={sexo === "Feminino"} value='Feminino' onClick={(e) => setSexo(e.target.value)} />
                Feminino</label>
            <label className='label-sexo'>
                <input type="radio" name='sexo' checked={sexo === "Masculino"} value="Masculino" onClick={(e) => setSexo(e.target.value)} />
                Masculino</label>
            </div>
            <button onClick={cadastrar}>Cadastre-se</button>
        </form>

    )
}

export default Form_cadastro