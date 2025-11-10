import React, { useContext,useState } from 'react'
import { Mycontext } from '../../context/ContextGlobalUser'
import './Login.css'
import login from '../../server/login'
import Toggle from '../../components/Toggle/Toggle'
import Form_login from '../../components/Forms/Form_login'
import Form_cadastro from '../../components/Forms/Form_cadastro'

function Login() {

  const [isActive, setIsActive] = useState(false);

<<<<<<< HEAD
    const usuario = {
      email:"ana.souza@email.com",
      senha:"senha123"
    }
=======
>>>>>>> 52c4937c1d3241a61624af01973bc8d800b72ac9

  
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
