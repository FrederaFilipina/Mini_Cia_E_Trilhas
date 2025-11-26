import React, { useEffect } from 'react'
import { Mycontext } from '../../context/ContextGlobalUser'
import { SlClose } from "react-icons/sl";


import { VscAccount } from 'react-icons/vsc'
import buscarDadosUsuario from '../../server/buscarInformacao/buscarDadosUsuario'



function Form_perfil_nEditavel({ editar, setEditar }) {

    const { setMeusDados, user, setUser, infouser, setInfouser } = React.useContext(Mycontext)
    const [carregando, setCarregando] = React.useState(false)




    async function pucharDados() {
        setCarregando(true)
        const dados = await buscarDadosUsuario(user.token)
        console.log(dados);

    
        if (dados.ok) {
            setInfouser(dados.result)
            setCarregando(false)
            return
        }



    }

    useEffect(() => {

        pucharDados()
        console.log(infouser);

    }, [])

    if (carregando) {
        return <p>Carregando...</p>
    }

    function iniciarEdicao(e) {
        e.preventDefault()
        setEditar(true)

    }

    return (


        <>

            <div className='icone_nome'>
                <button className='close_button' onClick={()=> setMeusDados(false)}><SlClose color='#fff'/></button>
                <VscAccount size={90} />
            
                <h1>{infouser.nome}</h1>

            </div>

            <div className='linha'></div>
            <div className='dados_usuario'>
                <p>E-mail: {infouser.email}</p>
                <p>CPF: {infouser.cpf}</p>
                <p>Telefone: {infouser.telefone} Ex: (48)99999-9999</p>
            <button className='botao_editar' onClick={iniciarEdicao}>Editar Perfil</button>
            </div>

        </>
    )
}

export default Form_perfil_nEditavel