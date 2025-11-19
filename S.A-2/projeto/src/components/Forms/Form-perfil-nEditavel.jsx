import React, { useEffect } from 'react'
import { Mycontext } from '../../context/ContextGlobalUser'

import buscarDadosUsuario from '../../server/buscarDadosUsuario'

function Form_perfil_nEditavel() {

    const { user, setUser } = React.useContext(Mycontext)
    const [infouser, setInfouser] = React.useState(false)
    const [carregando, setCarregando] = React.useState(false)


    async function pucharDados() {
        setCarregando(true)
        const dados = await buscarDadosUsuario(user.token)
        console.log(dados);

        setTimeout(() => {

            setInfouser(dados)
            setCarregando(false)

            ;
        }, 2000);


    }

    useEffect(() => {

        pucharDados()
        console.log(infouser);

    }, [])

    if (carregando) {
        return <p>Carregando...</p>
    }

    return (


        <div>
            <label >Nome</label>
            <input type="text" disabled value={infouser.nome} />
            <label >E-mail</label>
            <input type="text" disabled value={infouser.email} />
            <label >CPF</label>
            <input type="text" disabled value={infouser.cpf} />
            <label>Telefone:</label>
            <input type="tel" disabled value={infouser.telefone} />
            <button >Editar</button>
        </div>
    )
}

export default Form_perfil_nEditavel