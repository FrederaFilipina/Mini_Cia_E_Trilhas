import React from 'react'
import './Dropdown.css'
import { Link } from 'react-router-dom';
import { Mycontext } from '../../context/ContextGlobalUser';



function Dropdown({perfil,transparent}) {

    const [alterarSenha, setAlterarSenha] = React.useState(false);
    const [sair, setSair] = React.useState(false);
    const {user,setUser, setModalLogin, setModalPerfil,modalPerfil,meusDados, setMeusDados, setModalPerfi} = React.useContext(Mycontext)


    function botaoDeslogar() {
        setUser(false)
        localStorage.removeItem('user')
        
    }

    function abrirdados(){
        setMeusDados(true)
        setModalPerfil(false)
    }


    return (
        <div className='dropdown'>
            <Link className='link' onClick={()=> modalPerfil? setModalPerfil(false):setModalPerfil(true) }>Perfil</Link>
          
            <div className={`dropdown-menu ${perfil ? 'show' : ''} ${transparent? "transparente": ""}`}>
                <button onClick={abrirdados}>Meus dados</button>
                <button onClick={(e)=> setAlterarSenha(e.target.value)}>Alterar senha</button>
                <button onClick={botaoDeslogar}>Sair</button>
            </div>
            
        </div>
    )
}

export default Dropdown