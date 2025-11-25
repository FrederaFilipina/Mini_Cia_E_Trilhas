import React, { useEffect } from 'react'
import { Mycontext } from '../../context/ContextGlobalUser'

import { VscAccount } from 'react-icons/vsc'
import buscarDadosUsuario from '../../server/buscarInformacao/buscarDadosUsuario'



function Form_perfil_nEditavel({ editar, setEditar }) {

    const { user, setUser, infouser, setInfouser } = React.useContext(Mycontext)
    const [carregando, setCarregando] = React.useState(false)




    async function pucharDados() {
        setCarregando(true)
        const dados = await buscarDadosUsuario(user.token)
        console.log(dados);

        setTimeout(() => {

            setInfouser(dados)
            setCarregando(false)

                ;
        }, 1000);


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


        <div className='body_nEditavel'>


            <div className='icone_nome'>
                <VscAccount size={90} />
            
                <p>Nome: {infouser.nome}</p>

            </div>


            <div className='dados_usuario'>
                <p>E-mail: {infouser.email}</p>
                <p>CPF: {infouser.cpf}</p>
                <p>Telefone: {infouser.telefone} Ex: (48)99999-9999</p>
            </div>
            <button className='botao_editar' onClick={iniciarEdicao}>Editar</button>

        </div>
    )
}

export default Form_perfil_nEditavel