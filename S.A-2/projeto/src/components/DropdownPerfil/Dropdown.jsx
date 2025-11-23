import React from 'react'
import './Dropdown.css'
import { Link } from 'react-router-dom';
import { Mycontext } from '../../context/ContextGlobalUser';
import concluirEvento from '../../server/alterarDados/concluirEvento';

function Dropdown({perfil}) {

    const [alterarSenha, setAlterarSenha] = React.useState(false);
    const [sair, setSair] = React.useState(false);
    const {user,setUser, setModalLogin, setModalPerfil,modalPerfil,meusDados, setMeusDados, setModalPerfi} = React.useContext(Mycontext)


    function botaoDeslogar() {
        setUser(false)
        localStorage.removeItem('user')
        
    }

    async function test() {

        const dados ={
            email:" test",
            celular:"12",
            senha:"123",
            novaSenha:'1234'
        }
        console.log(user.token);
        
        const token = user.token

        const idEvento = 2

        const resposta = await concluirEvento(token,idEvento)

        console.log(resposta);

        alert(resposta)
        
    }

    return (
        <div className='dropdown'>
            <Link className='link' onClick={()=> modalPerfil? setModalPerfil(false):setModalPerfil(true) }>Perfil</Link>
            <div className={`dropdown-menu ${perfil ? 'show' : ''}`}>
                <button onClick={()=> setMeusDados(true)}>Meus dados</button>
                <button onClick={(e)=> setAlterarSenha(e.target.value)}>Alterar senha</button>
                <button onClick={botaoDeslogar}>Sair</button>
            </div>
        </div>
    )
}

export default Dropdown