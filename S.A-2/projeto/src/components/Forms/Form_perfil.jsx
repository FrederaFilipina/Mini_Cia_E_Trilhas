import React, { useEffect } from 'react'
import Perfil from '../Perfil/Perfil';

function Form_perfil() {

    const [email, setEmail] = React.useState('')
    const [telefone, setTelefone] = React.useState('')
    const [senha, setsenha] = React.useState('')
    const [senhanova, setSenhanova] = React.useState('')

    useEffect(() => {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser) {
            setUser(currentUser);
            setEmail(currentUser.email || '');
            setTelefone(currentUser.telefone || '');
        }
    }, []);

    async function alterações(e) {
        e.preventDefault();



        const dadosAlterados = {
            email: email,
            telefone: telefone,
            senha: senha,
            senhanova: senhanova
        }

        const resposta = await (Perfil)
        if (resposta.status !== 200) {
            alert("Erro ao salvar alterações, verifique seus dados.")
            return
        }
        console.log(dadosAlterados);

        alert("Alterações salvas com sucesso!")
    }



    return (
        <div>
            <form className='form-perfil'>

                <h2>Editar Perfil</h2>
                <label>Telefone:</label>
                <input type="text" value={telefone} placeholder="Ex: (48) 9123-45678" onChange={e => setTelefone(e.target.value)} /> <button>Adicionar</button>

                <label>Email:</label>
                <input type="email" value={email} placeholder="Email" onChange={e => setEmail(e.target.value)} />

                <label >Senha Atual:</label>
                <input type="password" value={senha} placeholder='Senha atual' onChange={e => setsenha(e.target.value)} />

                <label>Senha nova:</label>
                <input type="password" value={senhanova} placeholder="Sua nova senha" onChange={e => setSenhanova(e.target.value)} />

                <button type="submit">Salvar Alterações</button>

            </form>
        </div>
    )
}

export default Form_perfil