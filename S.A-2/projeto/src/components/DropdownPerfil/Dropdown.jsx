import React from 'react'
import './Dropdown.css'
import { Link } from 'react-router-dom';
import { Mycontext } from '../../context/ContextGlobalUser';
import alterarDadosUser from '../../server/alterarDadosUser';
import buscarDadosUsuario from '../../server/buscarDadosUsuario';
import alterarSenhaUser from '../../server/alterarSenhaUser';
import deletarUsuario from '../../server/deletarUsuario';
import concluirEvento from '../../server/concluirEvento';

function Dropdown({perfil}) {

    const [meusDados, setMeusDados] = React.useState(false);
    const [alterarSenha, setAlterarSenha] = React.useState(false);
    const [sair, setSair] = React.useState(false);
    const {user,setUser, setModalLogin, setModalPerfil,modalPerfil} = React.useContext(Mycontext)

    //(e)=> setMeusDados(e.target.value)

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
        


        // const resposta = await alterarDadosUser(dados,token)

        // console.log(resposta);
        
    }

    return (
        <div className='dropdown'>
            <Link className='link' onClick={()=> modalPerfil? setModalPerfil(false):setModalPerfil(true) }>Perfil</Link>
            <div className={`dropdown-menu ${perfil ? 'show' : ''}`}>
                <button onClick={test}>Meus dados</button>
                <button onClick={(e)=> setAlterarSenha(e.target.value)}>Alterar senha</button>
                <button onClick={(e)=> setSair(e.target.value)}>Sair</button>
            </div>
        </div>
    )
}

export default Dropdown