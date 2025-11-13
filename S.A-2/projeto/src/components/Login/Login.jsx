import React, { useContext,useState } from 'react'
import { Mycontext } from '../../context/ContextGlobalUser'
import './Login.css'
import login from '../../server/login'
import Toggle from '../Toggle/Toggle'
import Form_login from '../Forms/Form_login'
import Form_cadastro from '../Forms/Form_cadastro'

function Login() {

  const {setModalLogin, isActive, setIsActive} = useContext(Mycontext)

  const stilobotao={ color: '' }

  if (isActive) {
    stilobotao.color= 'Black'
    console.log('preto');
    
  }else{
    stilobotao.color= 'white'
    console.log('branco');
  }
  console.log(stilobotao);
  
  
  return (

    <div className="cont-login-body">
      <div className={`cont-login ${isActive ? 'active' : ''}`}>

        <div className="cont-forms">
          <Form_login />
          <Form_cadastro />
        </div>  

          <Toggle setStado={setIsActive} />
      </div>
      <button className="close-button" onClick={()=> setModalLogin(false)} style={stilobotao} >x</button>
    </div>
  )


}

export default Login
