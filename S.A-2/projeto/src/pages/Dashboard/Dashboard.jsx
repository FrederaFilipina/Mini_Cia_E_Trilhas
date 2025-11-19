import React from 'react'
import Header from '../../components/Header/Header'
import { Mycontext } from '../../context/ContextGlobalUser'
import Login from '../../components/Login/Login'
import Grafico from '../../components/Grafico/Grafico'

function Dashboard() {

  const {modalLogin, setModalLogin} = React.useContext(Mycontext)
  return (
    <div>
      {modalLogin && <Login/>}
     <Header />
     <Grafico/>

    </div>
  )
}

export default Dashboard
