import React, { useContext } from 'react'
import { Mycontext } from '../../context/ContextGlobalUser'

function Login() {

  const {setUser} = useContext(Mycontext)
  return (
    <div>
      Ola login
      <button onClick={setUser(true)}>logar</button>
    </div>
  )
}

export default Login
