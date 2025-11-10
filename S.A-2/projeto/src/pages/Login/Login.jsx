import React, { useContext,useState } from 'react'
import { Mycontext } from '../../context/ContextGlobalUser'
import './Login.css'
import login from '../../server/login'
import Toggle from '../../components/Toggle/Toggle'
import Form_login from '../../components/Forms/Form_login'
import Form_cadastro from '../../components/Forms/Form_cadastro'

function Login() {

  const [isActive, setIsActive] = useState(false);


  
  return (

    <div className="cont-login-body">
      <div className={`cont-login ${isActive ? 'active' : ''}`}>
      {/* <div className="cont-login "> */}

        <div className="cont-forms">
          <Form_login />
          <Form_cadastro />
        </div>

          <Toggle setStado={setIsActive} />
      </div>
    </div>
  )


}

export default Login
