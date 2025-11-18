import React from 'react'
import { Mycontext } from '../../context/ContextGlobalUser'

function Form_perfil_nEditavel() {

    // const {user,setUser} = React.useContext(Mycontext)
    

    return (
        <div>
            <label >Nome</label>
            <input type="text"  />
            <label>Telefone:</label>
            <input type="text" disabled value={telefone} placeholder="Ex: (48) 9123-45678" onChange={e => setTelefone(e.target.value)} /> <button>Adicionar</button>

            <label>Email:</label>
            <input type="email" value={email} placeholder="Email" onChange={e => setEmail(e.target.value)} />
        </div>
    )
}

export default Form_perfil_nEditavel