import React, { useContext } from 'react'
import { Mycontext } from '../../context/ContextGlobalUser'
import './Login.css'

function Login() {

  const {setUser} = useContext(Mycontext)
  return (
    <div className='cont-login'>

      <button onClick={setUser(true)}>logar</button>
    </div>
  )
}

export default Login
