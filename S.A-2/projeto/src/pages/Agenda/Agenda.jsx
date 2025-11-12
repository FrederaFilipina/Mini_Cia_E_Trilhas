import React from 'react'
import Header from '../../components/Header/Header'
import Login from '../../components/Login/Login'
import { Mycontext } from '../../context/ContextGlobalUser'

function Eventos() {

  const {modalLogin, setModalLogin} = React.useContext(Mycontext)

  return (
    <div>
      <Header/>
      {modalLogin && <Login/>}
    </div>
  )
}

export default Eventos
