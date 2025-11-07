import React, { useContext } from 'react'
import { Mycontext } from '../../context/ContextGlobalUser'
import './Login.css'
import login from '../../server/login'

function Login() {

 async function  funcao(){

    const usuario = {
      email:"bruno.lima@email.com",
      senha:"bruno2024"
    }

    const resultado = await login(usuario)

    setUser(resultado)
  }

  const {user,setUser} = useContext(Mycontext)

 
  

  return (
    <div className='cont-login'>
     {user&& user.nome}
      <button onClick={funcao}>logar</button>
    </div>
  )
}

export default Login
