import React from 'react'
import { Mycontext } from '../../context/ContextGlobalUser'

function Form_perfil_editavel() {

    const {infouser, setInfouser} = React.useContext(Mycontext)

    return (

        
        <div>


            <div>
            <label >Nome</label>
            <input type="text" disabled value={infouser.nome} />
            <label >E-mail</label>
            <input type="text" value={infouser.email} />
            <label >CPF</label>
            <input type="text" disabled value={infouser.cpf} />
            <label>Telefone:</label>
            <input type="tel" disabled value={infouser.telefone} />


            </div>
            
        </div>
    )
}

export default Form_perfil_editavel