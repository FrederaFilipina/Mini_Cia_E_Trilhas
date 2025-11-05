import React, { useContext } from 'react'
import { ContextGlobalUser, Mycontext } from '../../context/ContextGlobalUser'


function Cadastro() {

  const {user} = useContext(Mycontext)
  return (
    <div>
      {user}
      Ola cadastro
    </div>
  )
}

export default Cadastro
